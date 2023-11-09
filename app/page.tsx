/* eslint-disable no-unused-vars */
import { BaseNavbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BaseNavbar />
      <section
        className={`flex-center xl:h-[808px] md:h-[664px] h-[616px] relative w-full bg-[url(/images/landing-background.webp)] bg-no-repeat bg-cover bg-[top_center]`}
      >
        <div>
          <h1 className="heading-4xl text-white text-center drop-shadow-[0_2px_32px_#292836]">
            Find work you'll love, fast.
          </h1>
        </div>
      </section>
    </>
  );
}
