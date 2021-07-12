import React from "react";
import PropTypes from "prop-types";

export default function Button({ text, onClick, className }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
