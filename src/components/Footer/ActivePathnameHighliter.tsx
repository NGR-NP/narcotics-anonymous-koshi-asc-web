"use client"
import { NavbarContext } from '@/app/(home)/Contextapi';
import { useContext } from 'react';

interface ActivePathnameHighliterProps {
  children: React.ReactNode;
  href: string;
}
export default function ActivePathnameHighliter({
  children,
  href,
}: ActivePathnameHighliterProps) {
  const { pathname } = useContext(NavbarContext) as NavbarContextType;
  const active = pathname === href && 'text-primary';
  return <div className={`${active}`}>{children}</div>;
}
