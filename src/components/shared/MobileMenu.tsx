import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const MobileMenu = () => {
  const [selected, setSelected] = useState("Jobs");

  const menuItems = [
    { label: "Jobs", iconSrc: "/navbar/bag.svg", alt: "Jobs" },
    { label: "Payments", iconSrc: "/navbar/coins-hand.svg", alt: "Payments" },
    { label: "Messages", iconSrc: "/navbar/message.svg", alt: "Messages" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden inline-block">
        <Image src="/navbar/HamburgerMenu.svg" alt="Menu" height={40} width={40} />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-start">Menu</SheetTitle>
          <hr />
          <SheetDescription>
            <div className="flex flex-col gap-4 pt-5">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer ${
                    selected === item.label ? "bg-[#DC4A2D] text-white" : ""
                  }`}
                  onClick={() => setSelected(item.label)}
                >
                  <Image src={item.iconSrc} alt={item.alt} height={24} width={24} className="fill-current" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
