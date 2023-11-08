"use client";

import React from "react";
import { ButtonOutlineBlue } from "../Button";
import { useRouter } from "next/navigation";

type Props = {
  close: () => void;
};

const BaseMobileMenu: React.FC<Props> = ({ close }) => {
  const router = useRouter();

  const navigateTo = (path: `/${string}`) => {
    router.push(path);
  };
  return (
    <div>
      <div className="flex gap-y-6 flex-col">
        <ButtonOutlineBlue onClick={() => navigateTo("/login")}>
          Login
        </ButtonOutlineBlue>
        <ButtonOutlineBlue onClick={() => navigateTo("/login")}>
          sigup
        </ButtonOutlineBlue>
      </div>
    </div>
  );
};

export default BaseMobileMenu;
