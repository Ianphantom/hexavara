import React from "react";

// import component
import LandingPagesSectionOne from "./LandingPagesSectionOne";
import LandingPagesSectionTwo from "./LandingPagesSectionTwo";
import LandingPagesSectionThree from "./LandingPagesSectionThree";

const LandingPagesIndex = () => {
  return (
    <div>
      <LandingPagesSectionOne />
      <div className='container'>
        <LandingPagesSectionTwo />
      </div>
      <LandingPagesSectionThree />
    </div>
  );
};

export default LandingPagesIndex;
