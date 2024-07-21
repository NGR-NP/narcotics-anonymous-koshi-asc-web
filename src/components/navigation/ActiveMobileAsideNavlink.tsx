'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Boxes, Home, ScrollText, ShoppingBag, TicketPlus } from 'lucide-react';
import {
  IconAboutUsOutline,
  IconIdentificationCardOutline,
  IconUserGroupOutline,
} from '../Svg/svgicons';

export default function ActiveMobileAsideNavlink() {
  const pathname = usePathname();

  return (
    <>
      {Links.map((link) => {
        const active =
          link.link === pathname ? 'text-primary' : 'text-muted-foreground';
        return (
          <Link
            href={link.link}
            key={link.link}
            className={`flex items-center gap-4 px-2.5 hover:text-foreground ${active}`}
          >
            <link.icon className="h-5 w-5" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

const Links = [
  { name: 'Home', icon: Home, link: '/' },
  { name: 'Committee', icon: Boxes, link: '/committee' },
  { name: 'Meetings', icon: IconUserGroupOutline, link: '/meetings' },
  { name: 'Events', icon: TicketPlus, link: '/events' },
  { name: 'Literature', icon: ScrollText, link: '/literature' },
  { name: 'Merchandise', icon: ShoppingBag, link: '/merchandise' },
  { name: 'About', icon: IconAboutUsOutline, link: '/about' },
  { name: 'Contact', icon: IconIdentificationCardOutline, link: '/contact' },
];
