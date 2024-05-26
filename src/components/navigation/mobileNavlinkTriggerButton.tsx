'use client';
import { IconHandburgermenu, IconX } from '../Svg/svgicons';
import { useContext } from 'react';
import { NavbarContext } from '@/app/(home)/Contextapi';

export default function MobileNavlinkTriggerButton() {
  const { isOpen, setIsOpen } = useContext(NavbarContext) as NavbarContextType;
  const backdrop = isOpen ? 'fixed' : 'hidden';
  const openMobileNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={openMobileNav}
      type="button"
      data-collapse-toggle="navbar-link"
      className="inline-flex text-foreground items-center p-2 z-10 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus-visible:ring-2  hover:bg-secondary focus:ring-ring"
    >
      <span className="sr-only">Open main menu</span>
      <div
        onClick={openMobileNav}
        className={`top-0 left-0 h-full w-full  backdrop-blur-[1.5px] -z-10 ${backdrop}`}
      />
      <IconHandburgermenu className={isOpen ? 'hidden' : 'block'} />
      <IconX className={isOpen ? 'block' : 'hidden'} />
    </button>
  );
}
