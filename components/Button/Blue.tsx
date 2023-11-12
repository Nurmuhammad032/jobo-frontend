import React from "react";
import { IButtonProps } from "./types";

const Blue = ({ children, ...buttonAttributes }: IButtonProps) => {
  return (
    <button
      {...buttonAttributes}
      className="w-full rounded-full bg-blue py-4 font-semibold text-white hover:bg-darkBlue disabled:pointer-events-none disabled:select-none disabled:opacity-60"
    >
      {children}
    </button>
  );
};

export default Blue;
