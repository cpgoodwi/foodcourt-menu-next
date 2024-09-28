import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Costco Menu App",
  description: "Recreation of Costco Food Court Menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
