import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <title>EdTech</title>
        <meta name="title" content="EdTech"></meta>
        <link rel='shortcut icon' type='image/ico' href='/images/icon.png'></link>
        <meta property='og:image' content='/images/profileNew.jpg'></meta>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
