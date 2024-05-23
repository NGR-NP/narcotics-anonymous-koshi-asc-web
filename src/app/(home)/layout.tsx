import NavbarSection from '@/section/NavbarSection';
import { ReactNode } from 'react';
import { NavbarContextApi } from './Contextapi';

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <NavbarContextApi>
      <NavbarSection />
      {children}
    </NavbarContextApi>
  );
}
