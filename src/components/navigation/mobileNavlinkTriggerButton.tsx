'use client';
import { useSearchParams } from 'next/navigation';
import { IconHandburgermenu } from '../Svg/svgicons';
import { useRouter } from 'next/navigation';
import { URLParams } from '@/lib/utils';

export default function MobileNavlinkTriggerButton() {
  // use search params to show and hide navlink
  const searchParams = useSearchParams();
  const isOpen = Number(searchParams.get(URLParams.NAV_OPEN));
  const router = useRouter();
  console.log('isOpen', isOpen);
  const openMobileNav = () => {
    if (isOpen) {
      const currentSearchParams = new URLSearchParams(searchParams.toString());
      currentSearchParams.delete(URLParams.NAV_OPEN);
      const updatedSearchParams = new URLSearchParams(
        currentSearchParams.toString(),
      );
      // console.log('updatedSearchParams', currentSearchParams.toString()); // null
      router.push(`?${updatedSearchParams.toString()}`);
    } else {
      const currentSearchParams = new URLSearchParams(searchParams.toString());
      currentSearchParams.set(URLParams.NAV_OPEN, '1');
      const updatedSearchParams = new URLSearchParams(
        currentSearchParams.toString(),
      );
      // console.log('updatedSearchParams', currentSearchParams.toString());
      router.push(`?${updatedSearchParams.toString()}`);
    }
  };
  const backdrop = isOpen ? 'absolute' : 'hidden';
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
        className={`top-0 left-0 h-full w-full bg-secondary blur-md -z-10 opacity-50 ${backdrop}`}
      />
      <IconHandburgermenu />
    </button>
  );
}
