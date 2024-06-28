import React from "react";
import CompanyInfo from "./CompanyInfo";
import JobDetails from "./JobDetails";
import JobRequirements from "./JobRequirements";
import JobPositionAndLocation from "./JobPositionAndLocation";

const LeftContainer = () => {
  return <div className="xl:w-3/4 flex-1 bg-white border border-[#E7E7E7] h-full">
    <JobPositionAndLocation/>
    <JobRequirements/>
    <JobDetails/>
    <CompanyInfo/>
  </div>;
};

export default LeftContainer;
