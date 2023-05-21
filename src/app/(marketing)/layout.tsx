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

// function SearchForm() {
//   async function handleSubmit(formData: FormData) {
//     "use server";
//     // Gets the search value from the form data
//     const search = formData.get("search");
//     if (search !== null && typeof search === "string") {
//       const url = PokemonAPI.pokemonByName(search.toLowerCase());
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data.name);
//           revalidatePath(`/pokemon/${data.name}`);
//           // redirect(`/pokemon/${data.name}`);
//         })
//         .catch((err) => {
//           console.error(err);
//           revalidatePath(`/`);
//         });
//     }
//   }

//   return (
//     <form
//       action={handleSubmit}
//       className="flex h-full flex-1 rounded border border-slate-950"
//     >
//       <input
//         type="text"
//         className="flex-1 rounded pl-2  outline-none focus:shadow-2xl"
//         name="search"
//       />
//       <button
//         className="flex basis-14 items-center justify-center border-l-2 border-slate-950 bg-white hover:bg-slate-50"
//         type="submit"
//       >
//         <Icons.search size={20} />
//       </button>
//     </form>
//   );
// }

function Content() {
  return (
    <div className="flex h-10 flex-1 items-center gap-4">
      <nav className="ml-auto">
        <ul className="flex gap-5">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/faq">Faq</Link>
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
