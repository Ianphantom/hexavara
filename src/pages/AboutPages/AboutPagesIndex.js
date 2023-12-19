import React from "react";

// import component
import AboutPagesSectionOne from "./AboutPagesSectionOne";
import AboutPagesSectionTwo from "./AboutPagesSectionTwo";
import CTASectionComponent from "../../components/CTASectionComponent";
import HappyClientComponent from "../../components/HappyClientComponent";
import AboutPagesSectionFour from "./AboutPagesSectionFour";
import AboutPagesSectionFive from "./AboutPagesSectionFive";
import AboutPagesSectionSix from "./AboutPagesSectionSix";
import ScrollTop from "../../components/ScrollTop";

const AboutPagesIndex = () => {
  return (
    <div>
      <ScrollTop />
      <div className='container'>
        <AboutPagesSectionOne />
      </div>
      <AboutPagesSectionTwo />
      <HappyClientComponent />
      <AboutPagesSectionFour />
      <div className='container'>
        <AboutPagesSectionFive />
      </div>
      <AboutPagesSectionSix />
      <CTASectionComponent title='Empower your team and build a product your users love.' />
    </div>
  );
};

export default AboutPagesIndex;
