import Image from 'next/image';
import React from 'react';
import IconText from '../IconText';

const RightContainer = () => {
  return (
    <div className="xl:w-1/5 w-full  bg-[#FCFCFC]  xl:p-6 md:px-20 md:py-6 p-6  flex flex-col">
      <div className="flex gap-2 mb-4">
        <button className="xl:flex-1 text-red-600 border border-red-600 bg-[#FEF4F2] py-2 px-4 rounded-xl flex items-center justify-center">
          <Image src="/Homepage/rightContainer/Delete.svg" alt="" height={15} width={15}/>
          <span className="ml-2 text-nowrap">Delete job</span>
        </button>
        <button className="xl:flex-1 bg-[#DC4A2D] text-white py-2 px-4 rounded-xl flex items-center justify-center border border-[#f7d5cc]">
          <Image src="/Homepage/rightContainer/Edit.svg" alt="" height={15} width={15}/>
          <span className="ml-2 text-nowrap">Edit job</span>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between border-b border-[#E7E7E7] p-4">
          <IconText
            iconSrc="/Homepage/rightContainer/applicants.svg"
            iconAlt="Applicants"
            label="Applicants"
            containerClasses="flex flex-1 text-right items-center gap-3"
            textColor="text-[#4F4F4F] font-medium text-sm"
          />
          <p className="font-bold">400</p>
        </div>

        <div className="flex items-center justify-between border-b border-[#E7E7E7] p-4">
          <IconText
            iconSrc="/Homepage/rightContainer/matches.svg"
            iconAlt="Matches"
            label="Matches"
            containerClasses="flex flex-1 text-right items-center gap-3"
            textColor="text-[#4F4F4F] font-medium text-sm"
          />
          <p className="font-bold">100</p>
        </div>

        <div className="flex items-center justify-between border-b border-[#E7E7E7] p-4">
          <IconText
            iconSrc="/navbar/message.svg"
            iconAlt="Messages"
            label="Messages"
            containerClasses="flex flex-1 text-right items-center gap-3"
            textColor="text-[#4F4F4F] font-medium text-sm"
          />
          <p className="font-bold">147</p>
        </div>

        <div className="flex items-center justify-between border-b border-[#E7E7E7] p-4">
          <IconText
            iconSrc="/Homepage/rightContainer/views.svg"
            iconAlt="Views"
            label="Views"
            containerClasses="flex flex-1 text-right items-center gap-3"
            textColor="text-[#4F4F4F] font-medium text-sm"
          />
          <p className="font-bold">800</p>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
