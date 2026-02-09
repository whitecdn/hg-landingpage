import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: 'HostGenius Network',
  description: 'A private network, CEO dashboard, and homeowner CRM for vacation rental operators.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground`}>
        {children}
      </body>
    </html>
  );
}
