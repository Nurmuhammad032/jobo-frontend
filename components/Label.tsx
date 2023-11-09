import React from "react";

interface Props {
  name: string;
  text: string;
  required?: boolean;
}

const Label = ({ name, text, required }: Props) => {
  return (
    <label
      htmlFor={name}
      className="mb-1 phone:text-lg text-base text-black block font-medium"
    >
      {text}
      {required && <span className="text-red-500 ml-2 inline-block">*</span>}
    </label>
  );
};

export default Label;
