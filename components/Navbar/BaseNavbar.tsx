import Link from "next/link";
import { IconLogo } from "../Icon";
import { BaseNavigation } from "../Navigation";

const BaseNavbar = () => {
  return (
    <header className="px-8 py-4 bg-white">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <IconLogo />
        </Link>
        <div className="flex items-center font-medium">
          <BaseNavigation />
          <Link href={"/login"} className="text-[15px] px-4 py-3 text-dark">
            Post a job
          </Link>
          <Link
            href={"/login"}
            className="text-[15px] px-4 py-3 border border-blue rounded-full hover:text-darkBlue text-blue "
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default BaseNavbar;
