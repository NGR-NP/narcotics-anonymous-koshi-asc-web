import NavbarSection from '@/section/NavbarSection';
import { ReactNode } from 'react';
import FooterSection from '@/section/FooterSection';
import BottomMobileNav from '@/section/bottomMobileNav';
import TopHelplineSection from '@/section/TopHelplineSection';

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <TopHelplineSection />
      <NavbarSection />
      <BottomMobileNav />
      {children}
      <FooterSection />
    </>
  );
}
