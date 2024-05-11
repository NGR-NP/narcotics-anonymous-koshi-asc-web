import * as React from 'react';
import ToggleTheme from '@/components/ThemeSwitcher';
import NaKoshiAscLogo from '@/assets/logo/na_koshi_asc_logo.jpg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import MobileNavlinkTriggerButton from '@/components/navigation/mobileNavlinkTriggerButton';
import NavLinksComp from '@/components/tabs/NavLinks';
import Link from 'next/link';

export default function NavbarSection() {
  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex z-50 items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={50}
            height={50}
            src={NaKoshiAscLogo}
            className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full"
            alt="NA koshi area service committee logo"
          />
          <div>
            <p className="self-center font-serif text-base lg:text-xl xl:text-2xl  font-bold whitespace-nowrap">
              Narcotics Anonymous
            </p>
            <p className="self-center font-sans text-sm lg:text-base xl:text-lg font-semibold text-foreground/70 whitespace-nowrap">
              Koshi Area
            </p>
          </div>
        </Link>
        <div className="flex gap-4 items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <div className="max-sm:hidden">
            <ToggleTheme />
          </div>
          <div className="max-sm:hidden">
            <LanguageDropdown />
          </div>
          <MobileNavlinkTriggerButton />
        </div>
        <NavLinksComp />
      </div>
    </nav>
  );
}

const LanguageDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-foreground rounded-lg cursor-pointer bg-secondary/50 hover:bg-muted hover:text-primary"
        >
          <ContryFlag code="us" />
          En
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {lang.map(({ name, code }) => {
          return (
            <DropdownMenuItem key={name}>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  <ContryFlag code={code} />
                  {name}
                </div>
              </button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ContryFlag = ({ code }: { code: string }) => {
  return (
    <Image
      src={`https://flagcdn.com/16x12/${code}.png`}
      alt={code}
      width={20}
      height={12}
      className="w-5 h-5 rounded-full me-3"
    />
  );
};

const lang = [
  {
    name: 'english',
    code: 'us',
  },
  {
    name: 'नेपाली',
    code: 'np',
  },
  {
    name: 'np-en',
    code: 'np',
  },
];
