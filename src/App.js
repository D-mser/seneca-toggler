import React, { useContext } from "react";

import Question from "./components/Question";
import Button from "./components/Button";

import { DataContext } from "./components/DataContext";
import useLuckyPick from "./custom_hooks/useLuckyPick";

export default function App() {
  const { data, isFetching } = useContext(DataContext);
  const [question, setNextQuestion] = useLuckyPick({ items: data });

  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Question question={question} />
          <Button text="Next question" onClick={setNextQuestion} />
        </>
      )}
    </>
  );
}
