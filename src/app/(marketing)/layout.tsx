import Link from "next/link";
import {ReactNode} from "react";

import PokemonIcon from "@/components/pokemon_icon";

function Icon() {
  return (
    <strong className="flex-1 hover:animate-pulse">
      <Link href="/">
        <PokemonIcon />
      </Link>
    </strong>
  );
}

function Content() {
  return (
    <div className="flex h-10 flex-1 items-center gap-4">
      <nav className="ml-auto">
        <ul className="flex gap-5">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/pokemon">Pokemon</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-5">
        <Icon />
        <Content />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl justify-center py-2">
        <small>Just pokemons</small>
      </div>
    </footer>
  );
}

interface Props {
  children: ReactNode;
}

function MarketingLayout({children}: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MarketingLayout;
