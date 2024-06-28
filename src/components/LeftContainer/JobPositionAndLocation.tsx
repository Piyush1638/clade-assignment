import Image from "next/image";
import React from "react";

const JobPositionAndLocation = () => {
  return (
    <div className="flex flex-col md:gap-6 gap-3 p-6 border border-gray-200 rounded-lg shadow-md bg-white w-full md:ps-20">
      <div className="flex md:flex-row flex-col md:items-center md:justify-start md:gap-6 gap-1">
        <h1 className="md:text-3xl text-4xl font-semibold">Senior Product Designer</h1>
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 rounded-full bg-[#D1D1D1]" />
          <p className="text-sm">posted 2 days ago</p>
          <div className="bg-[#ECFDF3] border-[#ABEFC6] py-1 px-2 rounded-full w-fit flex items-center justify-center gap-2">
            <div className="bg-[#17B26A] h-1.5 w-1.5 rounded-full" />
            <p className="text-[#067647] font-semibold text-xs">Open</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/Homepage/leftContainer/location.svg"
            alt=""
            height={20}
            width={16}
          />
          <p className="font-medium text-[#5D5D5D] text-xl">Delaware, USA</p>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/Homepage/leftContainer/salary.svg"
            alt=""
            height={20}
            width={16}
          />
          <p className="font-medium text-[#5D5D5D] text-xl">$300k-$400k</p>
        </div>
      </div>
    </div>
  );
};

export default JobPositionAndLocation;
