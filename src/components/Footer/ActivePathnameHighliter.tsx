'use client';
import { usePathname } from 'next/navigation';

interface ActivePathnameHighliterProps {
  children: React.ReactNode;
  href: string;
}
export default function ActivePathnameHighliter({
  children,
  href,
}: ActivePathnameHighliterProps) {
  const pathname = usePathname();
  const active = pathname === href && 'text-primary';
  return <div className={`${active}`}>{children}</div>;
}
