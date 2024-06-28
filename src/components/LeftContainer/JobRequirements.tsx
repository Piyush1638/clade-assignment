import React from "react";

const JobRequirements = () => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-md bg-white w-full md:ps-20">
      <div className="lg:w-4/5 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Skills Required */}
          <div>
            <h3 className="font-semibold text-xs mb-2 text-gray-500">
              Skills Required
            </h3>
            <div className="flex flex-col gap-2">
              <SkillTag
                src="/Homepage/leftContainer/figma.svg"
                alt="Figma"
                label="Figma"
              />
              <SkillTag
                src="/Homepage/leftContainer/AdobeIllustrator.svg"
                alt="Adobe Illustrator"
                label="Adobe Illustrator"
              />
              <SkillTag
                src="/Homepage/leftContainer/AdobeXd.svg"
                alt="Adobe XD"
                label="Adobe XD"
              />
            </div>
          </div>

          {/* Preferred Language */}
          <KeyValue label="Preferred Language" value="English" isBold={true} />

          {/* Type */}
          <KeyValue label="Type" value="Full time" isBold={true} />

          {/* Years of Experience */}
          <KeyValue
            label="Years of Experience"
            value="3+ Years of Experience"
            isBold={true}
          />
        </div>
      </div>
    </div>
  );
};

export default JobRequirements;

interface KeyValueProps {
  label: string;
  value: string;
  isBold?: boolean;
}

const KeyValue: React.FC<KeyValueProps> = ({
  label,
  value,
  isBold = false,
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 text-xs">{label}</span>
      <span className={`text-sm ${isBold ? "font-semibold" : ""}`}>
        {value}
      </span>
    </div>
  );
};

interface SkillTagProps {
  src: string;
  alt: string;
  label: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ src, alt, label }) => {
  return (
    <div className=" w-fit flex items-center gap-2 p-2 border border-gray-200 rounded-full shadow-sm">
      <img src={src} alt={alt} className="w-5 h-5" />
      <span className="text-xs">{label}</span>
    </div>
  );
};
