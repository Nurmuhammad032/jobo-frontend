import React from "react";
import { IButtonProps } from "./types";

const Blue = ({ children, ...buttonAttributes }: IButtonProps) => {
  return (
    <button
      {...buttonAttributes}
      className="py-4 text-white font-semibold bg-blue rounded-full w-full hover:bg-darkBlue"
    >
      {children}
    </button>
  );
};

export default Blue;
