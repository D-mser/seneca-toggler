import React, { useContext } from "react";

import Question from "./components/Question";

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
        <div>
          <Question question={question} setNextQuestion={setNextQuestion} />
        </div>
      )}
    </>
  );
}
