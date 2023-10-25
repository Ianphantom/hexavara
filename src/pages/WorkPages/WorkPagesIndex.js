import React from "react";

// import component
import CTASectionComponent from "../../components/CTASectionComponent";
import WorkPagesSectionOne from "./WorkPagesSectionOne";
import WorkPagesSectionTwo from "./WorkPagesSectionTwo";
import HappyClientComponent from "../../components/HappyClientComponent";

const WorkPagesIndex = () => {
  return (
    <div>
      <WorkPagesSectionOne />
      <WorkPagesSectionTwo />
      <HappyClientComponent />
      <CTASectionComponent title='Empower your team and build a product your users love.' />
    </div>
  );
};

export default WorkPagesIndex;
