import "./globals.css";

// import {Inter} from "next/font/google";
import localFont from "next/font/local";
import {ReactNode} from "react";

import {cn} from "./lib/styles";

// const local = localFont({
//   src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
//   weight: "700",
//   variable: "--font-inter",
//   display: "swap",
// });
const localInter = localFont({
  src: "../../public/fonts/inter_font/Inter-Medium.otf",
  weight: "400",
  variable: "--font-inter",
  display: "swap",
});

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

export const metadata = {
  title: "Just Pokemons",
  description: "A simple pokemon's app",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html
      lang="en"
      className={cn(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        localInter.variable
      )}
    >
      <body>
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
