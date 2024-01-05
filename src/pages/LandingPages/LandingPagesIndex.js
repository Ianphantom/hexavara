import React from "react";

// import component
import LandingPagesSectionOne from "./LandingPagesSectionOne";
import LandingPagesSectionTwo from "./LandingPagesSectionTwo";
import LandingPagesSectionThree from "./LandingPagesSectionThree";
import LandingPagesSectionFour from "./LandingPagesSectionFour";
import LandingPagesSectionFive from "./LandingPagesSectionFive";
import LandingPagesSectionSix from "./LandingPagesSectionSix";
import HappyClientComponent from "../../components/HappyClientComponent";
import CTASectionComponent from "../../components/CTASectionComponent";
import LandingPagesSectionSeven from "./LandingPagesSectionSeven";
// import LandingPagesSectionEight from "./LandingPagesSectionEight";
import ScrollTop from "../../components/ScrollTop";

const LandingPagesIndex = () => {
  return (
    <div>
      <ScrollTop />
      <LandingPagesSectionOne />
      <div className='container'>
        <LandingPagesSectionTwo />
      </div>
      <LandingPagesSectionThree />
      <div className='container'>
        <LandingPagesSectionFour />
      </div>
      <LandingPagesSectionFive />
      <LandingPagesSectionSix />
      <HappyClientComponent />

      <LandingPagesSectionSeven />
      {/* TODO This feature is disabled in deploy V1 */}
      {/* <LandingPagesSectionEight /> */}
      <CTASectionComponent
        title='Ready to work with us?'
        desc='Effective communication is the cornerstone of success'
      />
    </div>
  );
};

export default LandingPagesIndex;
