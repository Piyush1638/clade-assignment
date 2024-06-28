"use client";
import React from "react";
import PageButton from "@/components/PageButton";

const CategoryButton = () => {
  const [buttonClicked, setButtonClicked] = React.useState("Job Preview");

  const onButtonClicked = (text: string) => {
    setButtonClicked(text);
  };
  return (
    <div>
      <PageButton
        text="Job Preview"
        buttonClicked={buttonClicked}
        onButtonClicked={onButtonClicked}
      />
      <PageButton
        text="Applicants"
        buttonClicked={buttonClicked}
        onButtonClicked={onButtonClicked}
      />
      <PageButton
        text="Match"
        buttonClicked={buttonClicked}
        onButtonClicked={onButtonClicked}
      />
      <PageButton
        text="Messages"
        buttonClicked={buttonClicked}
        onButtonClicked={onButtonClicked}
      />
    </div>
  );
};

export default CategoryButton;
