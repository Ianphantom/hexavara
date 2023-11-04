import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import TypeWriter from "typewriter-effect";

const AboutPagesSectionOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutPagesSectionOneStyled className='container'>
      <div className='title display-xlarge'>
        <div>Hi, we are</div>
        <div>
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [" Hexavara Tech."],
            }}
          />
        </div>
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
    display: flex;
    gap: 15px;
    color: var(--hxvr-neutral-100);
    span {
      color: var(--primary-base);
      text-decoration: underline;
    }
  }

  .desc {
    color: var(--hxvr-neutral-secondary);
  }
  @media (max-width: 992px) {
    .title {
      flex-direction: column;
    }
  }
`;

export default AboutPagesSectionOne;
