import React from "react";

import WorkDetailPagesSectionOne from "./WorkDetailPagesSectionOne";
import WorkDetailPagesSectionTwo from "./WorkDetailPagesSectionTwo";
import WorkDetailPagesSectionThree from "./WorkDetailPagesSectionThree";
import WorkDetailPagesSectionFour from "./WorkDetailPagesSectionFour";
import WorkDetailPagesSectionFive from "./WorkDetailPagesSectionFive";
import WorkDetailPagesSectionSix from "./WorkDetailPagesSectionSix";
import WorkDetailPagesSectionSeven from "./WorkDetailPagesSectionSeven";
import CTASectionComponent from "../../components/CTASectionComponent";
import WorkDetailPagesSectionEight from "./WorkDetailPagesSectionEight";
import ScrollTop from "../../components/ScrollTop";

const WorkDetailPages = () => {
  return (
    <div>
      <ScrollTop />
      <WorkDetailPagesSectionOne />
      <WorkDetailPagesSectionTwo />
      <WorkDetailPagesSectionThree />
      <WorkDetailPagesSectionFour />
      <WorkDetailPagesSectionFive />
      <WorkDetailPagesSectionSix />
      <WorkDetailPagesSectionSeven />
      <CTASectionComponent title='Empower your team and build a product your users love.' />
      <WorkDetailPagesSectionEight />
    </div>
  );
};

export default WorkDetailPages;
