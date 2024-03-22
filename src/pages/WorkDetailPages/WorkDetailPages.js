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
import WorkDetailTestimoniImage from "./WorkDetailTestimoniImage";
import ScrollTop from "../../components/ScrollTop";

const WorkDetailPages = () => {
  return (
    <div>
      <ScrollTop />
      <WorkDetailPagesSectionOne />
      <div className='container'>
        <WorkDetailPagesSectionTwo />
      </div>
      <WorkDetailPagesSectionThree />
      <WorkDetailPagesSectionFour />
      <div className='container'>
        <WorkDetailPagesSectionFive />
        <WorkDetailPagesSectionSix />
        <WorkDetailPagesSectionSeven />
      </div>
      <CTASectionComponent title='Empower your team and build a product your users love.' />
      <div className='container'>
        <WorkDetailPagesSectionEight />
      </div>
      <WorkDetailTestimoniImage />
    </div>
  );
};

export default WorkDetailPages;
