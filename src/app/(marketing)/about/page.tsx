import {type ReactNode} from "react";

import {cn} from "@/app/lib/styles";
import {Icons} from "@/components/icons";
import {PageWrapper} from "@/components/page_wrapper";

const SocialMedia = Object.freeze([
  {
    name: "GitHub",
    url: "https://github.com/masiucd",
    icon: Icons.github,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/masiu_cd",
    icon: Icons.twitter,
  },
]);

function A({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "items-center gap-3 font-bold italic hover:animate-pulse hover:text-blue-500 hover:underline",
        className
      )}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <div className="flex h-full flex-1 animate-jump-in flex-col justify-center gap-2">
        <h1>About</h1>
        <p>
          Pokemon applicatin built with{" "}
          <A href="https://nextjs.org ">Next JS</A>,{" "}
          <A href="https://reactjs.org/">React js</A> ,{" "}
          <A href="https://www.typescriptlang.org/ ">TypeScript</A> and{" "}
          <A href="https://tailwindcss.com/">Tailwind CSS</A>.
        </p>
        <p>
          List of pokemon&apos;s that are retrieved from{" "}
          <a
            className="font-bold italic text-blue-500 hover:underline"
            href="https://pokeapi.co/"
            target="_blank"
            rel="noreferrer"
          >
            PokeAPI.
          </a>
        </p>
        <div className="max-w-md">
          <fieldset className="flex flex-col gap-2 rounded border border-slate-800 px-1">
            <legend>
              <span className="rounded bg-slate-950 p-1 text-xl font-bold text-white shadow">
                Social media
              </span>
            </legend>
            <ul className="flex gap-2 py-2">
              {SocialMedia.map((social) => (
                <li key={social.name}>
                  <A className="flex" href={social.url}>
                    <span className="ml-2">{social.name}</span>
                    <span>
                      <social.icon size={20} />
                    </span>
                  </A>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutPage;
