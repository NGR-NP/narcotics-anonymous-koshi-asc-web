import NavbarSection from '@/section/NavbarSection';
import { ReactNode } from 'react';
import { NavbarContextApi } from './Contextapi';
import FooterSection from '@/section/FooterSection';
import BottomMobileNav from '@/section/bottomMobileNav';
import { PhoneIcon } from 'lucide-react';
import { IconPhoneOutline } from '@/components/Svg/svgicons';
import TopHelplineSection from '@/section/TopHelplineSection';

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <NavbarContextApi>
      <TopHelplineSection/>
      <NavbarSection />
      <BottomMobileNav />
      {children}
      <FooterSection />
    </NavbarContextApi>
  );
}
