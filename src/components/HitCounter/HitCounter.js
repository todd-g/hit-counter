"use client";
import React from "react";

import { readFile, writeFile } from "../../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

const hitsJson = readFile("src/database.json");
const hitsObj = JSON.parse(hitsJson);

const nextHits = hitsObj.hits + 1;

const nextHitsObj = { hits: nextHits };
const nextHitsString = JSON.stringify(nextHitsObj);

writeFile("src/database.json", nextHitsString);

function HitCounter() {
  const [hideCount, setHideCount] = React.useState(false);
  return <button className={hideCount && "censored"}>{nextHits}</button>;
}

export default HitCounter;
