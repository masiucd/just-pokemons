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
        <div className="mx-auto flex max-w-7xl items-center justify-between border border-red-300 px-2">
          <strong className="flex-1">
            <Link href="/">
              <PokemonIcon />
            </Link>
          </strong>

          <div className="flex flex-1 gap-4">
            <form
              action=""
              className="flex w-2/3 rounded border border-slate-950"
            >
              <input type="text" className="w-3/4 rounded  outline-none" />
              <button
                className="w-1/4   border-l-2 border-slate-950"
                type="submit"
              >
                Fire
              </button>
            </form>

            <nav className="ml-auto">
              <ul className="flex gap-5">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/faq">Faq</Link>
                </li>
              </ul>
            </nav>
          </div>
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
