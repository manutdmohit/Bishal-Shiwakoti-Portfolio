import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/footer';

// Load the Inter font with subsets and variable for CSS variables
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: 'Bishal Shiwakoti - Network & Security Engineer',
  description:
    'CCNA & CompTIA Security+ certified, specializing in network security infrastructure, Cisco ESA, and email security.',
  openGraph: {
    title: 'Bishal Shiwakoti - Network & Security Engineer',
    description:
      'CCNA & CompTIA Security+ certified, specializing in network security infrastructure, Cisco ESA, and email security.',
    url: 'https://yourwebsite.com', // Update later
    siteName: 'Bishal Shiwakoti - Network & Security Engineer',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          'font-sans antialiased',
          'bg-white dark:bg-gray-900'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
