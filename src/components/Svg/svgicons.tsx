import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
export const IconLocation = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ref={ref}
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      ></path>
    </svg>
  ),
);
IconLocation.displayName = 'IconLocation';

export const IconClock = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ref={ref}
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),
);
IconClock.displayName = 'IconClock';

export const IconCalender = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      ref={ref}
      className={cn('h-6 w-6', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  ),
);
IconCalender.displayName = 'IconCalender';
export const IconLang = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden={true}
      viewBox="0 0 3900 3900"
      ref={ref}
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
      <path
        stroke="#fff"
        strokeWidth="300"
        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
      ></path>
      <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path
                  id="a"
                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                ></path>
                <use y="420" xlinkHref="#a"></use>
                <use y="840" xlinkHref="#a"></use>
                <use y="1260" xlinkHref="#a"></use>
              </g>
              <use y="1680" xlinkHref="#a"></use>
            </g>
            <use x="247" y="210" xlinkHref="#b"></use>
          </g>
          <use x="494" xlinkHref="#c"></use>
        </g>
        <use x="988" xlinkHref="#d"></use>
        <use x="1976" xlinkHref="#c"></use>
        <use x="2470" xlinkHref="#e"></use>
      </g>
    </svg>
  ),
);
IconLang.displayName = 'IconLang';


export const IconHandburgermenu = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 17 14"
      ref={ref}
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      ></path>
    </svg>
  ),
);
IconHandburgermenu.displayName = 'IconHandburgermenu';



























interface iconDotProps {
  className?: string;
  content?: string;
  danger?: boolean;
  success?: boolean;
  yellow?: boolean;
  tooltipDir?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end';
}
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
export const IconDot = ({
  className,
  danger,
  success,
  yellow,
  tooltipDir = 'left',
  content,
}: iconDotProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              'h-2 w-2 rounded-full bg-gray-400 ring-gray-500 ring-1 ring-offset-2  ring-offset-content1',
              danger && 'bg-red-600 ring-red-600',
              success && 'bg-green-400  ring-green-500',
              yellow && 'bg-yellow-400 ring-yellow-500',
              className,
            )}
          />
        </TooltipTrigger>
        <TooltipContent className="text-secondary-foreground" data-lide={tooltipDir}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
