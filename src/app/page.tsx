import React from "react";
import CategoryButton from "@/components/CategoryButton";
import LeftContainer from "@/components/LeftContainer/LeftContainer";
import RightContainer from "@/components/RightContainer/RightContainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between pt-[6.688rem]">
      <div className="w-full lg:px-10 md:px-20 px-3 flex items-start justify-start border-[1px] border-[#E7E7E7]">
        <CategoryButton />
      </div>

      <div className="flex xl:flex-row flex-col flex-1 w-full h-full">
        <LeftContainer />
        <RightContainer />
      </div>
    </main>
  );
}
