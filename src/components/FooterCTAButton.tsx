'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterCTAButton() {
  return (
    <>
      <Links
        className="max-md:hidden hover:animate-bounce"
        href="mail:nakoshiasc@gmail.com"
      >
        <Image
          width="64"
          height="64"
          src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/64/external-email-interface-essentials-kmg-design-outline-color-kmg-design.png"
          alt="mail us for support and guidance"
        />
      </Links>
      <Links
        href="tel:+977-9704503606"
        className="md:hidden right-3 animate-bounce -bottom-5"
      >
        <Image
          className="-scale-100 rotate-90 "
          width="64"
          height="64"
          src="https://img.icons8.com/external-anggara-flat-anggara-putra/64/external-call-load-communication-anggara-flat-anggara-putra.png"
          alt="click here to talk with someone who's been there"
        />
      </Links>
    </>
  );
}

const Links = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link href={href} className={cn('absolute bottom-3 right-10', className)}>
      {children}
    </Link>
  );
};
