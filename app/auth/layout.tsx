import { AuthNavbar } from "@/components/Navbar";
import { ILayoutProps } from "@/types/layoutProps";
import React from "react";

const layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <AuthNavbar />
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </div>
  );
};

export default layout;
