"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { IconLogo } from "../Icon";
import { BaseNavigation } from "../Navigation";
import { MenuDrawer } from "../Drawer";
import { BaseMobileMenu } from "./";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const BaseNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <header className="bg-white px-8 py-4">
      <MenuDrawer
        component={BaseMobileMenu}
        close={closeDrawer}
        isVisible={isDrawerOpen}
      />
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <IconLogo />
        </Link>
        <div className="flex items-center font-semibold">
          <div className="show-xl">
            <BaseNavigation />
          </div>
          <Link
            href={"/login"}
            className="normal-padding text-[15px] text-dark"
          >
            Post a job
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="normal-padding show-xl rounded-full border border-blue text-[15px] text-blue outline-none hover:text-darkBlue ">
                Log In
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <button className="block w-full !cursor-pointer !py-2">
                  Workers
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={"/auth/login"}
                  className="block w-full !cursor-pointer !py-2"
                >
                  Employers
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="normal-padding" onClick={openDrawer}>
            <Menu className="hidden-xl cursor-pointer" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default BaseNavbar;
