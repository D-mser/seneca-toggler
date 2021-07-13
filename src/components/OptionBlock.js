import React, { useState } from "react";
import PropTypes from "prop-types";
import { spaceToDash } from "../utils";

export default function OptionBlock(props) {
  const [selected, setSelected] = useState("");

  function onChange(event) {
    const selectedInput = event.target.value;
    setSelected(selectedInput);

    if (props.options.filter((o) => o.option === selectedInput)[0].isSolution) {
      props.setValidAnswer(props.blockId);
    } else {
      props.setInvalidAnswer(props.blockId);
    }
  }

  const blocks = props.options.map((o) => (
    <input
      type="radio"
      key={spaceToDash(o.option)}
      name={o.id}
      label={o.option}
      onChange={onChange}
      value={o.option}
      checked={selected === o.option}
      disabled={props.disabled}
      className={
        selected === o.option ? props.styles.backgroundClass : "default"
      }
    />
  ));

  return (
    <div className={`option-block switch-toggle ${props.styles.borderClass}`}>
      {blocks}
    </div>
  );
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
  blockId: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    backgroundClass: PropTypes.string,
    borderClass: PropTypes.string,
  }),
};
