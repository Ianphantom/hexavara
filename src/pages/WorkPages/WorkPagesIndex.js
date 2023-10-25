import React from "react";

// import component
import CTASectionComponent from "../../components/CTASectionComponent";
import WorkPagesSectionOne from "./WorkPagesSectionOne";
import WorkPagesSectionTwo from "./WorkPagesSectionTwo";

const WorkPagesIndex = () => {
  return (
    <div>
      <WorkPagesSectionOne />
      <WorkPagesSectionTwo />
      <CTASectionComponent title='Empower your team and build a product your users love.' />
    </div>
  );
};

export default WorkPagesIndex;
