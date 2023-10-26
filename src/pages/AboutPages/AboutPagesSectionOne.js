import React from "react";
import styled from "styled-components";

const AboutPagesSectionOne = () => {
  return (
    <AboutPagesSectionOneStyled className='container'>
      <div className='title display-xlarge'>
        Hi, we are <span>Hexavara Tech.</span>
      </div>
      <div className='desc paragraph-large regular'>
        in 2016, Hexavara Technology is dedicated to developing tailored
        software solutions for partner organizations. With continuous growth, we
        expand our services and products to a broader market. In 2018, we
        officially launched our software services to the global community,
        staying committed to excellence and innovation.
      </div>
    </AboutPagesSectionOneStyled>
  );
};

const AboutPagesSectionOneStyled = styled.div`
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .title {
    color: var(--hxvr-neutral-100);
    span {
      color: var(--primary-base);
      text-decoration: underline;
    }
  }

  .desc {
    color: var(--hxvr-neutral-secondary);
  }
`;

export default AboutPagesSectionOne;
