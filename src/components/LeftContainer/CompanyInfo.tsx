import React from "react";
import Image from "next/image";

const CompanyInfo = () => {
  return (
    <div className="flex flex-col items-start gap-10 w-full py-10 px-6 border border-b-0 border-gray-200 rounded-lg shadow-md bg-white md:ps-20">
      {/* Company Logo and Name */}
      <div className="flex items-center mb-4 lg:mb-0 lg:mr-6">
        <Image
          src="/Homepage/leftContainer/CompanyLogo.svg"
          alt="Company Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <h1 className="text-lg font-semibold">Atlassian</h1>
      </div>

      {/* Company Details */}
      <div className="grid grid-cols-2 gap-y-5 gap-x-8 lg:w-3/4 w-full">
        <CompanyDetail label="Company size" value="1k - 2k Employees" />
        <CompanyDetail label="Type" value="Private" />
        <CompanyDetail label="Sector" value="Information Technology, Infrastructure" />
        <CompanyDetail label="Funding" value="Bootstrapped" />
        <CompanyDetail label="Founded In" value="2019" />
        <CompanyDetail label="Founded By" value="Scott Farquhar, Mike Cannon-Brookes" />
      </div>
    </div>
  );
};

export default CompanyInfo;




interface CompanyDetailProps {
    label: string;
    value: string;
  }
  
  const CompanyDetail: React.FC<CompanyDetailProps> = ({ label, value }) => {
    return (
      <div className="flex flex-col">
        <span className="text-gray-500 text-sm font-medium">{label}</span>
        <span className="font-medium text-[#3D3D3D]">{value}</span>
      </div>
    );
  };
