import '@/app/ui/global.css';

import { Metadata } from 'next';
import { robotoFlex } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "O'Keefe ECG v2",
  description: 'Latest & greatest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
