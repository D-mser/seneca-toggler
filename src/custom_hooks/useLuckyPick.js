import { useState } from "react";

export default function LuckyIndexPick({ items }) {
  const [index, setIndex] = useState(0);

  function random() {
    return Math.floor(Math.random() * items.length);
  }

  function handleNextItem() {
    setIndex(random());
  }

  return [items[index], handleNextItem];
}
