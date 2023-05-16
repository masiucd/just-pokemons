import "./globals.css";

import {Inter} from "next/font/google";
import {ReactNode} from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Just Pokemons",
  description: "A simple pokemon's app",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
