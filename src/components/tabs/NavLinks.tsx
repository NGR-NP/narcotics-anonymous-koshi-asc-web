'use client';

import { NavbarContext } from '@/app/(home)/Contextapi';
import { cn } from '@/lib/utils';
import { Boxes } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { Button } from '../ui/button';
import {
  IconAboutUsSolid,
  IconHomeSolid,
  IconIdentificationCardSolid,
} from '../Svg/svgicons';

const Links = [
  {
    name: 'Home',
    href: '/',
    icon: <IconHomeSolid />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <IconAboutUsSolid />,
  },
  {
    name: 'Committee',
    href: '/committee',
    icon: <Boxes aria-hidden="true" />,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <IconIdentificationCardSolid />,
  },
];
export default function NavLinksComp() {
  const pathname = usePathname();
  const { isOpen: isopen } = useContext(NavbarContext) as NavbarContextType;
  const isOpen = isopen ? 'scale-100' : 'hidden';

  return (
    <div
      className={cn(
        'items-center z-50 justify-between bg-transparent w-full md:flex md:w-auto md:order-1',
        isOpen,
      )}
      id="navbar-link"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 max-sm:absolute  max-sm:w-full backdrop-blur-md border bg-transparent rounded-lg md:gap-4 md:flex-row md:mt-0 md:border-0 border-border">
        {Links.map((link) => {
          const active =
            pathname === link.href &&
            'bg-primary md:bg-primary text-white font-bold  dark:md:bg-primary';
          console.log(pathname, link.href);

          const hideOnSmallScreen =
            link.href !== pathname
              ? link.href === '/' ||
                link.href === '/events' ||
                link.href === '/meetings'
                ? 'hidden'
                : 'block'
              : '';
          return (
            <li
              key={link.href}
              className={`group hover:shadow-md md:shadow-sm  hover:text-accent-foreground  hover:bg-accent  ${hideOnSmallScreen} overflow-hidden`}
            >
              <Link
                href={link.href}
                className={cn(
                  'flex gap-2 py-2 items-center px-4 capitalize group-hover:text-accent-foreground  group-hover:bg-accent     md:active:scale-95   md:rounded max-lg:px-2 md:py-1  ',
                  active,
                )}
              >
                <Button
                  size={'icon'}
                  className={cn(
                    `bg-transparent w-4 h-4 max-lg:w-6 max-lg:h-6 text-inherit group-hover:text-accent-foreground group-hover:animate-slide-up-out-back-in  hover:bg-transparent `,

                    pathname === link.href && 'text-white',
                  )}
                  asChild
                >
                  {link.icon}
                </Button>{' '}
                <p className="md:hidden lg:block">{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
