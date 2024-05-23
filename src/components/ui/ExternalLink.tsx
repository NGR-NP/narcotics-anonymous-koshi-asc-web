import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ExternalLinkIcon, MapPinned } from 'lucide-react';
import * as React from 'react';

const ExternalLinkVariants = cva('', {
  variants: {
    variant: {
      default: '',
      destructive:
        'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outline:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary:
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: '',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
const iconMapping = {
  ExternalLinkIcon,
  MapPinned,
};
export interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof ExternalLinkVariants> {
  href?: string;
  icon?: keyof typeof iconMapping;
}

const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ className, variant, href, icon, ...props }, ref) => {
    const Icon = icon && iconMapping[icon];
    return (
      <div className="flex justify-end items-center text-end gap-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref}
          className={cn(ExternalLinkVariants({ variant, className }))}
        >
          {props.children}
        </a>
        {Icon && href && <Icon size={18} className="w-6 h-4 items-center" />}
      </div>
    );
  },
);
ExternalLink.displayName = 'ExternalLink';

export { ExternalLink, ExternalLinkVariants };
