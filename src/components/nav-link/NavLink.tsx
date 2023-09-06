import React, { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
  text: string;
  link: string;
}

export const NavLink: FC<NavLinkProps> = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="text-[22px] tracking-wide text-white transition-all duration-75 hover:text-[#30BCD6] hover:underline hover:underline-offset-2"
      >
        {text}
      </Link>
    </li>
  );
};
