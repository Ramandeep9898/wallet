import React from "react";

type CheckboxProps = {
  handleCheckbox: Function;
  checked: boolean;
  name: string;
};
//@ts-ignore
export const Checkbox = ({ handleCheckbox, checked, name }) => {
  console.log(name, checked);
  return (
    <label className="container">
      <input type="checkbox" name={name} onClick={handleCheckbox} />
      <span className={checked ? "checkmark checkmark-success" : "checkmark"} />
    </label>
  );
};
