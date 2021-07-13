import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import OptionBlock from "./OptionBlock";
import Button from "./Button";
import { countTrueValues } from "../utils";
import useTheme from "../custom_hooks/useTheme";

export default function Question({ question, setNextQuestion }) {
  const [validAnswers, setValidAnswers] = useState({});

  const optionBlocks = question.answer_options_block;
  const expectedSolutionCount = optionBlocks.length;
  const foundSolutions = countTrueValues(validAnswers);

  const theme = useTheme({
    found: foundSolutions,
    expected: expectedSolutionCount,
  });

  function validateOptionBlock(index) {
    setValidAnswers((prev) => {
      return { ...prev, [index]: true };
    });
  }

  function invalidateOptionBlock(index) {
    setValidAnswers((prev) => {
      return { ...prev, [index]: false };
    });
  }

  const options = optionBlocks.map((optionBlock, index) => (
    <OptionBlock
      key={"" + index + expectedSolutionCount}
      blockId={"" + index + expectedSolutionCount}
      options={optionBlock}
      setValidAnswer={validateOptionBlock}
      setInvalidAnswer={invalidateOptionBlock}
      disabled={expectedSolutionCount === foundSolutions}
      styles={{
        backgroundClass: theme.inputCheckedClass,
        borderClass: theme.borderClass,
      }}
    />
  ));

  useEffect(() => {
    setValidAnswers({});
  }, [question]);

  return (
    <div style={{ background: theme.background }} className="question-box">
      <div className="question-statement">
        <h1>{question.statement}</h1>
      </div>
      <div className="all-options">{options}</div>
      <div className="question-outcome">
        <h2>
          The answer is{" "}
          {expectedSolutionCount === foundSolutions ? "correct" : "incorrect"}
        </h2>
      </div>
      <div className="next-question">
        <Button
          text="Next question"
          onClick={setNextQuestion}
          className="simple-button"
        />
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    statement: PropTypes.string,
    answer_options_block: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          option: PropTypes.string,
          isSolution: PropTypes.bool,
        })
      )
    ),
  }).isRequired,
  setNextQuestion: PropTypes.func.isRequired,
};
