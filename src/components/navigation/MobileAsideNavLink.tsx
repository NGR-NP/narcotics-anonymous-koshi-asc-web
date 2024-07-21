import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import Image from 'next/image';
import NaKoshiAscLogo from '@/assets/logo/na_koshi_asc_logo.jpg';

import ActiveMobileAsideNavlink from './ActiveMobileAsideNavlink';
import { Menu } from 'lucide-react';
import { IconHandburgermenu } from '../Svg/svgicons';

export default function MobileAsideNavLink() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <IconHandburgermenu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 py-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg w-fit font-semibold"
          >
            <Image
              width={50}
              height={50}
              src={NaKoshiAscLogo}
              className="h-10 w-10 rounded-full"
              alt="NA koshi area service committee logo"
            />
            <div>
              <p className="self-center font-serif text-sm pr-2 font-bold whitespace-nowrap">
                Narcotics Anonymous
              </p>
              <p className="self-center font-sans text-xs font-semibold text-foreground/70 whitespace-nowrap">
                Koshi Area
              </p>
            </div>
            <span className="sr-only">
              Narcotics Anonymous Koshi Area Service Committee
            </span>
          </Link>

          <ActiveMobileAsideNavlink />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
