'use client';

import { URLParams, cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const Links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Committee',
    href: '/committee',
  },
];
export default function NavLinksComp() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isOpen = Number(searchParams.get(URLParams.NAV_OPEN))
    ? 'scale-100'
    : 'hidden';

  return (
    // <div
    //   className={cn(
    //     'z-50  duration-1000 ease-out  items-center justify-between hidden w-full md:flex md:w-auto md:order-1',
    //     isOpen,
    //   )}
    //   id="navbar-link"
    // >
       <div
    className={cn("items-center z-50 justify-between bg-transparent w-full md:flex md:w-auto md:order-1", isOpen)}
    id="navbar-link"
  >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-transparent dark:bg-transparent border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-border">
        {Links.map((link) => {
          const active = pathname === link.href && 'bg-secondary';
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 px-3 capitalize text-white hover:bg-primary/5  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 ${active}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
