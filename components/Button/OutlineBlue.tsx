import { FC } from "react";
import { IButtonProps } from "./types";

const OutlineBlue: FC<IButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className="w-full px-6 py-4 text-center rounded-full text-blue font-semibold border text-base border-blue hover:border-darkBlue"
    >
      {children}
    </button>
  );
};

export default OutlineBlue;
