import React from "react";
import PropTypes from "prop-types";
import OptionBlock from "./OptionBlock";

export default function Question({ question }) {
  const options = question.answer_options_block.map((optionBlock, index) => (
    <OptionBlock key={index} options={optionBlock} />
  ));

  return (
    <div>
      <div className="h-centered">
        <h1>{question.statement}</h1>
      </div>
      <div>{options}</div>
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
};
