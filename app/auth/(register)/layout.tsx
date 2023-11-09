import { ILayoutProps } from "@/types/layoutProps";
import Link from "next/link";
import React from "react";

const layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <section>
      {children}{" "}
      <div className="my-10">
        <div className="text-center">
          <h4 className="text-dark">
            Already have an account?
            <Link className="ml-2 inline-block text-blue" href={"login"}>
              Sign in
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default layout;
