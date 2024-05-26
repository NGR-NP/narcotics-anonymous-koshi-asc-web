import type { Metadata } from 'next';
import './globals.css';
import { Provider } from './ThemeProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | Narcotics Anonymous KOSHI ASC',
    default: 'NA KOSHI ASC',
  },
  description:
    'NA KOSHI Area Service Committee (ASC) is a non-profit organization that provides services to the NA community through the use of resources and services provided by the community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
