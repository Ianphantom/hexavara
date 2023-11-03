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
import LandingPagesSectionEight from "./LandingPagesSectionEight";

const LandingPagesIndex = () => {
  return (
    <div>
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
      <LandingPagesSectionEight />
      <CTASectionComponent
        title='Ready to work with us?'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
      />
    </div>
  );
};

export default LandingPagesIndex;
