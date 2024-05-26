'use client';

import { usePathname } from 'next/navigation';
import { createContext, useState } from 'react';

export const NavbarContext = createContext<NavbarContextType | undefined>(
  undefined,
);
export function NavbarContextApi({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen, pathname }}>
      {children}
    </NavbarContext.Provider>
  );
}
