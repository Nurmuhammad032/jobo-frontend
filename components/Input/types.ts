import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isShow?: boolean;
  toggle?: () => void;
}

// import React, { ButtonHTMLAttributes } from "react";

// export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }
