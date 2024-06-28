import React from "react";

const JobDetails = () => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-md bg-white w-full md:ps-20">
      <JobDetailSection
        title="About the job"
        items={[
          "Handle the UI/UX research design",
          "Work on researching on latest web applications designs & trends",
          "Work on conceptualizing and visualizing",
          "Work on creating graphics content and other graphic related works",
        ]}
        isNumbered={true}
      />
      <JobDetailSection
        title="Benefits:"
        items={["Health insurance", "Provident Fund"]}
      />
      <JobDetailSection
        title="Schedule:"
        items={["Day shift"]}
      />
      <JobDetailSection
        title="Supplemental pay types:"
        items={["Performance bonus", "Yearly bonus"]}
      />
      <JobDetailSection
        title="Work Location:"
        items={["In person"]}
        isNumbered={false}
      />
    </div>
  );
};

export default JobDetails;




interface JobDetailSectionProps {
    title: string;
    items: string[];
    isNumbered?: boolean;
  }
  
  const JobDetailSection: React.FC<JobDetailSectionProps> = ({ title, items, isNumbered = false }) => {
    return (
      <div className="mb-3">
        <h3 className="font-semibold text-[#6E6D6D] text-sm">{title}</h3>
        {isNumbered ? (
          <ol className="list-decimal pl-6">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          <ul className="list-disc pl-6">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
