import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

 const IconSun = forwardRef<SVGSVGElement, SVGProp>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      ref={ref}
      className={cn(
        'h-[1.2rem] w-[1.2rem] transition-all group-hover:rotate-90 hover:rotate-90 ',
        className,
      )}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM2.197 2.197a.5.5 0 01.707 0L4.318 3.61a.5.5 0 01-.707.707L2.197 2.904a.5.5 0 010-.707zM.5 7a.5.5 0 000 1h2a.5.5 0 000-1h-2zm1.697 5.803a.5.5 0 010-.707l1.414-1.414a.5.5 0 11.707.707l-1.414 1.414a.5.5 0 01-.707 0zM12.5 7a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-1.818-2.682a.5.5 0 010-.707l1.414-1.414a.5.5 0 11.707.707L11.39 4.318a.5.5 0 01-.707 0zM8 12.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm2.682-1.818a.5.5 0 01.707 0l1.414 1.414a.5.5 0 11-.707.707l-1.414-1.414a.5.5 0 010-.707zM5.5 7.5a2 2 0 114 0 2 2 0 01-4 0zm2-3a3 3 0 100 6 3 3 0 000-6z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
);
IconSun.displayName = 'IconSun';

export default IconSun;