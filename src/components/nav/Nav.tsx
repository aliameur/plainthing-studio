import React from "react";
import { NavLink } from "@/components/nav-link";
import Image from "next/image";

export const Nav = () => {
  return (
    <nav className="flex h-[80px] items-center justify-between bg-opacity-90 px-[30px] font-inktrap font-light">
      <Image
        src="/logo.png"
        alt="logo"
        height={72}
        width={294}
        className="h-[37px] w-[147px]"
      />
      <ul className="flex items-center space-x-14">
        <NavLink link="/home" text="Home" />
        <NavLink link="/home" text="Work" />
        <NavLink link="/home" text="About" />
        <NavLink link="/home" text="Contact" />
      </ul>
    </nav>
  );
};
