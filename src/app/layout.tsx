
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'DevLaunch',
  description: 'Build your first full-stack app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
