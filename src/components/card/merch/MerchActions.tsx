'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { MinusCircleIcon, PlusCircleIcon, ShoppingCart } from 'lucide-react';
import {
  useForm,
  SubmitHandler,
  Controller,
  Control,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { set } from 'date-fns';

// Define types for props and form inputs
type Inputs = {
  qty: number;
  size: sizeType;
  color: string;
  suk: merchVarientType[];
};

interface MerchActionsProps {
  merch: merchType;
}

// Main component
export default function MerchActions({ merch }: MerchActionsProps) {
  const { varient } = merch;
  const firstMerch = varient[0];
  const isFirstMerchHasStock = firstMerch.stock > 0;

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      qty: isFirstMerchHasStock ? 1 : 0,
      color: firstMerch.color,
      size: firstMerch.size,
      suk: varient,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleQtyChange = (
    value: number,
    onChange: any,
    type: 'add' | 'sub',
  ) => {
    const val = Number(value);
    if (!Number.isNaN(val)) {
      onChange(type === 'add' ? val + 1 : val - 1);
    } else {
      onChange(1);
    }
  };

  return (
    <CardFooter className="flex-col gap-y-2 items-start">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start flex-wrap justify-start gap-y-4">
          <ChooseColor
            setValue={setValue}
            watch={watch}
            control={control}
            variants={varient}
          />
          <ChooseSize control={control} variants={varient} />
        </div>
        <div className="flex w-full gap-2 items-center py-2 justify-end">
          <p className="text-lg font-semibold text-foreground cursor-auto my-3">
            {Intl.NumberFormat('en-NP', {
              style: 'currency',
              currency: 'NPR',
              currencyDisplay: 'narrowSymbol',
              useGrouping: true,
              minimumFractionDigits: 0,
            }).format(merch.price)}
          </p>
          <Controller
            control={control}
            name="qty"
            rules={{
              pattern: {
                value: /^[0-9]$/,
                message: 'Invalid quantity',
              },
              max: {
                value: 10,
                message: 'Not enough stock',
              },
              min: 1,
            }}
            render={({
              field: { onChange, value, ref },
              fieldState: { invalid },
            }) => (
              <div
                ref={ref}
                className="flex w-full gap-2 items-center py-2 justify-end"
              >
                <Input
                  type="tel"
                  value={value}
                  onChange={onChange}
                  inputMode="numeric"
                  className={`w-8 h-8 in appearance-none text-center p-0 order-2 ${invalid ? 'border-red-500 animate-shake' : ''}`}
                />
                <Button
                  size="icon"
                  onClick={() => handleQtyChange(value, onChange, 'add')}
                  className="size-8 active:scale-95 p-0 order-3"
                  variant="ghost"
                >
                  <PlusCircleIcon />
                </Button>
                <Button
                  onClick={() => handleQtyChange(value, onChange, 'sub')}
                  variant="ghost"
                  size="icon"
                  className="size-8 p-0 active:scale-95 order-1"
                >
                  <MinusCircleIcon />
                </Button>
              </div>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={!!errors.qty}
          className="w-full text-primary-foreground active:scale-95 duration-200 ease-in-out"
        >
          <ShoppingCart /> &nbsp; Add to Cart
        </Button>
        {errors.qty && <p>{errors.qty.message}</p>}
      </form>
    </CardFooter>
  );
}

// Sub-component for choosing color
const ChooseColor = ({
  control,
  variants,
  watch,
  setValue,
}: {
  control: Control<Inputs>;
  variants: merchVarientType[];
  watch: UseFormWatch<Inputs>;
  setValue: UseFormSetValue<Inputs>;
}) => {
  const watchSize = watch('size');
  const availableColors = variants
    .filter((variant) => variant.size === watchSize)
    .map((variant) => variant.color);
  useEffect(() => {
    setValue('color', availableColors[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, watchSize]);
  return (
    <Controller
      control={control}
      name="color"
      rules={{
        required: {
          value: true,
          message: 'Please select a color',
        },
      }}
      render={({ field: { onChange, value, ref } }) => (
        <ToggleGroup
          type="single"
          ref={ref}
          defaultValue={value}
          onValueChange={onChange}
          variant="outline"
          className="gap-x-3 justify-start flex-wrap max-w-64"
        >
          {availableColors.map((color) => (
            <ToggleGroupItem
              key={color}
              value={color}
              className="rounded-full animate-slide-right ring-1 border-card border size-7"
              style={{
                backgroundColor: color,
                boxShadow: `var(--tw-ring-offset-shadow), var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) ${value === color ? (color !== 'black' ? color : 'white') : 'transparent'}, var(--tw-shadow, 0 0 #0000)`,
              }}
            />
          ))}
        </ToggleGroup>
      )}
    />
  );
};

// Sub-component for choosing size
const ChooseSize = ({
  control,
  variants,
}: {
  control: Control<Inputs>;
  variants: merchVarientType[];
}) => {
  const uniqueSizes = Array.from(new Set(variants.map(({ size }) => size)));
  return (
    <Controller
      control={control}
      name="size"
      rules={{
        required: {
          value: true,
          message: 'Please select a size',
        },
      }}
      render={({ field: { onChange, value, ref } }) => (
        <ToggleGroup
          type="single"
          ref={ref}
          defaultValue={value}
          onValueChange={onChange}
          variant="outline"
          className="flex-wrap justify-start max-w-64"
        >
          {uniqueSizes.map((size) => (
            <ToggleGroupItem
              key={size}
              value={size}
              className={`active:scale-95 uppercase`}
            >
              {size}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )}
    />
  );
};

// Helper function to check merchandise variant success
const checkMerchVariantSuks = (
  variants: merchVarientType[],
  val: string,
  type: 'size' | 'color',
) => {
  return variants.filter((variant) => variant[type] === val);
};
