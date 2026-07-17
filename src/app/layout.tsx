import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {RootProvider} from 'fumadocs-ui/provider/next';
import './globals.css';

export const metadata:Metadata={
  title:'JaxOS Help Center',
  description:'Help, guides, and answers for using JaxOS.',
  robots:{index:true,follow:true},
};

export default function RootLayout({children}:{children:ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
