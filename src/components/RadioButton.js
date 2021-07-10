import React from "react";

export default function RadioButton({ name, label, checked }) {
  return (
    <>
      {/* <label> */}
      <input
        type="radio"
        label={label}
        name={name}
        value={label}
        checked={checked}
        onChange={() => {}}
      />
      {/* <span>{label}</span>
      </label> */}
    </>
  );
}
