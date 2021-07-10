import React from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";
import { spaceToDash, random } from "../utils";

export default function OptionBlock({ options }) {
  const blocks = options.map((o) => (
    <RadioButton
      key={spaceToDash(o.option)}
      name={o.id}
      label={o.option}
      checked={true}
    />
  ));

  return <div className="option-block switch-toggle">{blocks}</div>;
}

OptionBlock.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      option: PropTypes.string,
      isSolution: PropTypes.bool,
    })
  ).isRequired,
};
