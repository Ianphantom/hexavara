import React from "react";
import { styled } from "styled-components";

// import component
import AboutPagesSectionOne from "./AboutPagesSectionOne";
import AboutPagesSectionTwo from "./AboutPagesSectionTwo";
import CTASectionComponent from "../../components/CTASectionComponent";
import HappyClientComponent from "../../components/HappyClientComponent";
// import AboutPagesSectionFour from "./AboutPagesSectionFour";
import AboutPagesSectionFive from "./AboutPagesSectionFive";
// import AboutPagesSectionSix from "./AboutPagesSectionSix";
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
      {/* TODO This feature is disabled in deploy V1*/}
      {/* <AboutPagesSectionFour /> */}
      <ContainerGreyBackground>
        <div className='container'>
          <AboutPagesSectionFive />
        </div>
      </ContainerGreyBackground>
      {/* TODO This feature is disabled in deploy V1*/}
      {/* <AboutPagesSectionSix /> */}
      <CTASectionComponent title='Empower your team and build a product your users love.' />
    </div>
  );
};

const ContainerGreyBackground = styled.div`
  background: #f6f6f6;
`;

export default AboutPagesIndex;
