import { ILayoutProps } from "@/types/layoutProps";
import React from "react";

const layout: React.FC<ILayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default layout;
