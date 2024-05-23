import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./ThemeProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | KOSHI ASC",
    default: "KOSHI ASC",
  },
  description: "NA KOSHI Area Service Committee(ASC)",
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
