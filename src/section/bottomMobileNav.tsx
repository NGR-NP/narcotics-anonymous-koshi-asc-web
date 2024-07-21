'use client';
import {
  IconHomeSolid,
  IconTicketSolid,
  IconUserGroupSolid,
  IconUserProfileSolid,
} from '@/components/Svg/svgicons';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/',
    icon: <IconHomeSolid />,
  },
  {
    name: 'Mettings',
    href: '/mettings',
    icon: <IconUserGroupSolid />,
  },
  {
    name: 'Events',
    href: '/Events',
    icon: <IconTicketSolid />,
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: <IconUserProfileSolid />,
  },
];
export default function BottomMobileNav() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'fixed  bottom-0 left-0 duration-200 ease-linear md:hidden z-50 w-full h-16 bg-secondary border-t border-border',
      )}
    >
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {links.map((link) => {
          const active = pathname === link.href;
          const iconActiveStyle = active
            ? 'text-primary'
            : 'text-secondary-foreground/50';
          const activePageNameStyle = active
            ? 'text-primary'
            : 'text-accent-foreground';
          return (
            <button
              type="button"
              key={link.href}
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <Slot
                className={`w-5 h-5 mb-2  group-hover:text-primary ${iconActiveStyle}`}
              >
                {link.icon}
              </Slot>
              <span
                className={`"text-sm group-hover:text-primary ${activePageNameStyle}`}
              >
                {link.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
