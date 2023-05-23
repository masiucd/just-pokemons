import React from "react";

import {PageWrapper} from "@/components/page_wrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      <div className="flex h-full flex-1 flex-col justify-center gap-2">
        <h1 className="font-bold">About</h1>
        <p>
          Are you a Pokémon enthusiast looking to catch &apos;em all? Look no
          further! PokéDex is an innovative application built on Next.js,
          powered by the incredible Pokémon API, that brings the world of
          Pokémon right to your fingertips. With PokéDex, you can dive into the
          immersive world of Pokémon, explore a vast collection of creatures,
          and uncover valuable information about each one.
        </p>
        <p>
          PokéDex leverages the power of Next.js, a cutting-edge React
          framework, to deliver a seamless and lightning-fast user experience.
          Whether you&apos;re a seasoned Pokémon trainer or just starting your
          journey, our application offers an intuitive and visually stunning
          interface that keeps you engaged at every step.
        </p>

        <h3>Key Features</h3>
        <ul className="flex list-disc flex-col gap-3">
          <li>
            Extensive Pokémon Database: PokéDex taps into the comprehensive
            Pokémon API to provide you with access to an extensive collection of
            Pokémon. Explore over 800 unique species, each with its own distinct
            abilities, types, and evolutions.
          </li>

          <li>
            Search and Filter: With our user-friendly search and filter
            functionality, finding your favorite Pokémon has never been easier.
            Narrow down your search by type, region, or even by name, and
            discover new Pokémon that match your criteria.
          </li>

          <li>
            Detailed Pokémon Profiles: Get to know each Pokémon intimately with
            detailed profiles. Discover their statistics, moves, abilities,
            evolutions, and much more. Uncover hidden secrets and lore as you
            delve deeper into the world of Pokémon.
          </li>

          <li>
            Stunning Visuals: Immerse yourself in a visually captivating
            experience with PokéDex. Our application utilizes Next.js&apos;s
            powerful rendering capabilities to showcase high-resolution images
            of Pokémon, allowing you to appreciate their unique designs and
            characteristics.
          </li>

          <li>
            Interactive Experience: PokéDex offers an interactive experience
            that goes beyond mere information. Engage with each Pokémon by
            viewing their animated sprites, hearing their cries, and exploring
            their evolutions through captivating visuals.
          </li>

          <li>
            Responsive Design: Whether you&apos;re browsing on your desktop,
            tablet, or smartphone, PokéDex adapts flawlessly to any screen size.
            Enjoy the same immersive experience on any device, ensuring you
            never miss a beat in your Pokémon journey.
          </li>

          <li>
            Favorite and Save: Keep track of your favorite Pokémon by saving
            them to your personal collection. Mark the ones you&apos;ve caught
            or set goals for your future Pokémon captures. Your collection is
            just a click away, making it easy to monitor your progress.
          </li>
        </ul>
        <p>
          With PokéDex, embarking on your Pokémon adventure has never been more
          exciting or convenient. Explore, learn, and connect with the vast
          world of Pokémon, right from the comfort of your device.
        </p>
        <p>
          Join us on this thrilling journey as we strive to become the ultimate
          Pokémon trainers. Let PokéDex be your guide to unlock the mysteries of
          the Pokémon universe. Download the app now and let the adventure
          begin!
        </p>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
