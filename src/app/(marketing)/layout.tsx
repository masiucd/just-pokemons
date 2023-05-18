import Link from "next/link";
import {ReactNode} from "react";

import PokemonIcon from "@/components/pokemon_icon";

interface Props {
  children: ReactNode;
}

const MarketingLayout = ({children}: Props) => {
  return (
    <>
      <header>
        <div className="mx-auto flex max-w-7xl items-center justify-between border px-2">
          <strong>
            <Link href="/">
              <PokemonIcon />
            </Link>
          </strong>
          <nav>
            <ul className="flex gap-3">
              <li>
                <Link href="/about ">About</Link>
              </li>
              <li>
                <Link href="/faq">Faq</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer>
        <div className="mx-auto flex max-w-7xl justify-center py-2">
          <small>Just pokemons</small>
        </div>
      </footer>
    </>
  );
};

export default MarketingLayout;
