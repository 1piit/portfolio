import type { Metadata } from 'next';
import { DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const DMSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const SpaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Pierre Bride · Full-stack Developer',
  description:
    'French full-stack developer with a passion for front-end development. Stacks: TypeScript, Next.js, React.js, TailwindCSS, Nest.js, Node.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${DMSans.variable} ${SpaceMono.variable} antialiased h-full font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
