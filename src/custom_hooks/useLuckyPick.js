import { useState } from "react";
import { random } from "../utils";

export default function LuckyIndexPick({ items }) {
  const [index, setIndex] = useState(0);

  function handleNextItem() {
    setIndex(random(items.length));
  }

  return [items[index], handleNextItem];
}
