import React from "react";

// import component
import LandingPagesSectionOne from "./LandingPagesSectionOne";
import LandingPagesSectionTwo from "./LandingPagesSectionTwo";
import LandingPagesSectionThree from "./LandingPagesSectionThree";
import LandingPagesSectionFour from "./LandingPagesSectionFour";
import LandingPagesSectionFive from "./LandingPagesSectionFive";

const LandingPagesIndex = () => {
  return (
    <div>
      <LandingPagesSectionOne />
      <div className='container'>
        <LandingPagesSectionTwo />
      </div>
      <LandingPagesSectionThree />
      <LandingPagesSectionFour />
      <LandingPagesSectionFive />
    </div>
  );
};

export default LandingPagesIndex;
