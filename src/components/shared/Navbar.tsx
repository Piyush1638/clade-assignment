"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DropDown from "./DropDown";
import MobileMenu from "./MobileMenu";

import IconText from "../IconText";

const Navbar = () => {
  const [selected, setSelected] = useState("Jobs");

  return (
    <header className="h-[6.813rem] border-b-[2px] border-[#E7E7E7] bg-white fixed top-0 w-full p-5">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="h-[3.813] w-[6.25] bg-gray-200 py-2 px-[1.75rem] flex items-center justify-center text-red-500"
        >
          Logo
        </Link>

        <div className="lg:flex hidden justify-between w-[33.625rem] h-[4.625rem] gap-2 rounded-full border border-gray-300 p-2">
          <IconText
            iconSrc="/navbar/bag.svg"
            iconAlt="Jobs"
            label="Jobs"
            containerClasses={`${
              selected === "Jobs"
                ? "bg-[#DC4A2D] p-2 flex  items-center justify-center gap-2 border border-red-300 rounded-full text-white"
                : "flex flex-1 text-center items-center justify-center gap-3"
            } cursor-pointer w-[6.813rem] h-[3.625rem]`}
            textColor={selected === "Jobs" ? "text-white" : "text-[#B0B0B0]"}
            onClick={() => setSelected("Jobs")}
          />
          <IconText
            iconSrc="/navbar/message.svg"
            iconAlt="Messages"
            label="Messages"
            containerClasses={`${
              selected === "Messages"
                ? "bg-[#DC4A2D] p-2 flex  items-center justify-center gap-2 border border-red-300 rounded-full text-white"
                : "flex flex-1 text-center items-center justify-center gap-3"
            } cursor-pointer`}
            textColor={selected === "Messages" ? "text-white" : "text-[#B0B0B0]"}
            showBadge
            onClick={() => setSelected("Messages")}
          />
          <IconText
            iconSrc="/navbar/coins-hand.svg"
            iconAlt="Payments"
            label="Payments"
            containerClasses={`${
              selected === "Payments"
                ? "bg-[#DC4A2D] p-2 flex items-center justify-center gap-2 border border-red-300 rounded-full text-white"
                : "flex flex-1 text-center items-center justify-center gap-3"
            } cursor-pointer`}
            textColor={selected === "Payments" ? "text-white" : "text-[#B0B0B0]"}
            onClick={() => setSelected("Payments")}
          />
        </div>

        <div className="lg:flex hidden items-center justify-center gap-4">
          <IconWithBadge
            iconSrc="/navbar/bell.svg"
            iconAlt="Notifications"
            badgeClasses="h-1.5 w-1.5 bg-red-600 rounded-full absolute top-0 right-0"
          />
          <Image
            src="/navbar/profile.svg"
            alt="Profile"
            height={40}
            width={40}
            className="rounded-full"
          />
          <DropDown />
        </div>

        {/* Mobile Nav */}
        <MobileMenu />
      </nav>
    </header>
  );
};

interface IconWithBadgeProps {
  iconSrc: string;
  iconAlt: string;
  badgeClasses: string;
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({
  iconSrc,
  iconAlt,
  badgeClasses,
}) => (
  <div className="relative">
    <Image src={iconSrc} alt={iconAlt} height={25} width={23} />
    <div className={badgeClasses} />
  </div>
);

export default Navbar;