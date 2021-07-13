import { useEffect, useState } from "react";

export default function useTheme({ found, expected }) {
  const [background, setBackground] = useState("");
  const [inputCheckedClass, setInputCheckedClass] = useState("");
  const [borderClass, setBorderClass] = useState("");

  function pickTheme() {
    if (found === 1 || found === 0) {
      setBackground("linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)");
      setInputCheckedClass("one-solution");
      setBorderClass("border-one-solution");
    } else if (found === expected) {
      setBackground("linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)");
      setInputCheckedClass("all-solutions");
      setBorderClass("border-some-and-all-solutions");
    } else {
      setBackground("linear-gradient(180deg, #F1B496 0%, #EA806A 100%)");
      setInputCheckedClass("some-solutions");
      setBorderClass("border-some-and-all-solutions");
    }
  }

  useEffect(pickTheme);

  return { background, inputCheckedClass, borderClass };
}
