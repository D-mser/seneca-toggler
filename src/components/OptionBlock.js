import React from "react";
import PropTypes from "prop-types";

export default function OptionBlock({ options }) {
  const checkboxes = options.map((o, index) => (
    <label key={index}>
      <input type="checkbox" />
      {o.option}
    </label>
  ));
  return <div>{checkboxes}</div>;
}

OptionBlock.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string,
      isSolution: PropTypes.bool,
    })
  ).isRequired,
};
