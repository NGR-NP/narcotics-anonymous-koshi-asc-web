import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import MerchAction from './merch/MerchActions';

interface MerchandiseCardProps {
  merch: merchType;
}
export default function MerchandiseCard({ merch }: MerchandiseCardProps) {
  return (
    <Card className="group shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <Image
          src={merch.image}
          alt={merch.name}
          width={200}
          height={200}
          className="rounded-t-lg object-cover h-56 w-full"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{merch.name}</CardTitle>
        {merch?.desc && (
          <CardDescription className="line-clamp-2">
            {merch.desc}
          </CardDescription>
        )}
      </CardContent>
      <MerchAction merch={merch} />
    </Card>
  );
}
