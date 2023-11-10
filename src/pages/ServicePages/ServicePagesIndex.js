import React from "react";

import ServicePagesSectionOne from "./ServicePagesSectionOne";
import ServicePagesSectionTwo from "./ServicePagesSectionTwo";
import ServicePagesSectionThree from "./ServicePagesSectionThree";
import ServicePagesSectionFour from "./ServicePagesSectionFour";
import AboutPagesSectionFour from "../AboutPages/AboutPagesSectionFour";
import HappyClientComponent from "../../components/HappyClientComponent";
import CTASectionComponent from "../../components/CTASectionComponent";
import ScrollTop from "../../components/ScrollTop";

const ServicePagesIndex = () => {
  return (
    <div>
	  <ScrollTop/>
      <ServicePagesSectionOne />
      <ServicePagesSectionTwo />
      <ServicePagesSectionThree />
      <div className='container'>
        <ServicePagesSectionFour />
      </div>
      <AboutPagesSectionFour />
      <HappyClientComponent />
      <CTASectionComponent
        title='Ready to work with us?'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
      />
    </div>
  );
};

export default ServicePagesIndex;
