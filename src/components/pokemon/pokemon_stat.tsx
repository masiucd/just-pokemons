"use client";

import {motion} from "framer-motion";

import {cn} from "@/app/lib/styles";
import {type UrlType} from "@/types/pokemon";

const StatValues = Object.freeze({
  1: 10,
  2: 20,
  3: 30,
  4: 40,
  5: 50,
  6: 60,
  7: 70,
  8: 80,
  9: 90,
  10: 100,
});

function getStatValue(stat: number) {
  if (stat < 10) {
    return StatValues[1];
  }
  if (stat < 20) {
    return StatValues[2];
  }
  if (stat < 30) {
    return StatValues[3];
  }
  if (stat < 40) {
    return StatValues[4];
  }
  if (stat < 50) {
    return StatValues[5];
  }
  if (stat < 60) {
    return StatValues[6];
  }
  if (stat < 70) {
    return StatValues[7];
  }
  if (stat < 80) {
    return StatValues[8];
  }
  if (stat < 90) {
    return StatValues[9];
  }
  return StatValues[10];
}

interface Props {
  stat: UrlType;
  baseStat: number;
}

export function PokemonStat({stat, baseStat}: Props) {
  return (
    <li>
      <p className="capitalize"> {stat.name}</p>
      <div className={cn("h-5 rounded flex items-center  shadow text-white")}>
        <motion.div
          initial={{width: 0}}
          animate={{
            width: `${getStatValue(baseStat)}%`,
            transition: {duration: 1},
          }}
          className="flex h-full items-center rounded bg-slate-900 pl-2 text-white shadow"
        >
          <p>{baseStat}</p>
        </motion.div>
      </div>
    </li>
  );
}
