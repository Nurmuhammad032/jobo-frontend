"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { IconLogo } from "../Icon";
import { BaseNavigation } from "../Navigation";
import { MenuDrawer } from "../Drawer";
import { BaseMobileMenu } from "./";
import { useState } from "react";

const BaseNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <header className="px-8 py-4 bg-white">
      <MenuDrawer
        component={BaseMobileMenu}
        close={closeDrawer}
        isVisible={isDrawerOpen}
      />
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <IconLogo />
        </Link>
        <div className="flex items-center font-semibold">
          <div className="show-xl">
            <BaseNavigation />
          </div>
          <Link
            href={"/login"}
            className="text-[15px] normal-padding text-dark"
          >
            Post a job
          </Link>
          <Link
            href={"/login"}
            className="text-[15px] normal-padding show-xl border border-blue rounded-full hover:text-darkBlue text-blue "
          >
            Log In
          </Link>
          <button className="normal-padding" onClick={openDrawer}>
            <Menu className="hidden-xl cursor-pointer" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default BaseNavbar;
