import React from "react";

// import component
import AboutPagesSectionOne from "./AboutPagesSectionOne";
import AboutPagesSectionTwo from "./AboutPagesSectionTwo";
import CTASectionComponent from "../../components/CTASectionComponent";
import HappyClientComponent from "../../components/HappyClientComponent";
import AboutPagesSectionThree from "./AboutPagesSectionThree";
import AboutPagesSectionFour from "./AboutPagesSectionFour";
import AboutPagesSectionFive from "./AboutPagesSectionFive";

const AboutPagesIndex = () => {
  return (
    <div>
      <div className='container'>
        <AboutPagesSectionOne />
      </div>
      <AboutPagesSectionTwo />
      <div className='container'>
        <AboutPagesSectionThree />
      </div>
      <HappyClientComponent />
      <AboutPagesSectionFour />
      <AboutPagesSectionFive />
      <CTASectionComponent title='Empower your team and build a product your users love.' />
    </div>
  );
};

export default AboutPagesIndex;
