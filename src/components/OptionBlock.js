import React, { useState } from "react";
import PropTypes from "prop-types";
import { spaceToDash } from "../utils";

export default function OptionBlock({ options, setValidAnswer, disabled }) {
  const [selected, setSelected] = useState("");

  function onChange(event) {
    const selectedInput = event.target.value;
    setSelected(selectedInput);

    if (options.filter((o) => o.option === selectedInput)[0].isSolution) {
      setValidAnswer();
    }
  }

  const blocks = options.map((o) => (
    <input
      type="radio"
      key={spaceToDash(o.option)}
      name={o.id}
      label={o.option}
      onChange={onChange}
      value={o.option}
      checked={selected === o.option}
      disabled={disabled}
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
  disabled: PropTypes.bool.isRequired,
};
