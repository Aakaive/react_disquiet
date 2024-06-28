import React from 'react';
import { DataProvider } from '../context/DataContext';
import '../styles/globals.css'; // 전역 CSS 포함
import Top from '@/components/layout/Top';

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <DataProvider>
          <div className="relative">
            <Top />
            {children}
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
