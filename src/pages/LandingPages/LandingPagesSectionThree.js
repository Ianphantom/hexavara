import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styled from "styled-components";

const LandingPagesSectionThree = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LandingPagesSectionThreeStyled>
      <div className='container'>
        <div className='text-container'>
          <div className='title display-large'>
            <span className='regular'>Pioneering Excellence</span>
            <br /> Since 2016
          </div>
          <div className='desc paragraph-large regular'>
            Take a sneak peak of our HQ
          </div>
        </div>

        <div
          className='video-container'
          data-aos='zoom-in-up'
          data-aos-duration='2500'
        >
          <iframe
            title='HQ'
            src='https://www.youtube.com/embed/UC3PbMpkEtM'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </LandingPagesSectionThreeStyled>
  );
};

const LandingPagesSectionThreeStyled = styled.div`
  padding-top: 140px;
  border-radius: 120px 0px 0px 0px;
  background: var(--primary-base);
  .container {
    display: flex;
    flex-direction: column;
    gap: 75px;
    .text-container {
      padding: 0px 18px;
      display: flex;
      justify-content: space-between;
      .title {
        color: var(--hxvr-neutral-30);
      }
      .desc {
        display: flex;
        align-items: flex-end;
        color: var(--hxvr-neutral-30);
      }
    }

    .video-container {
      padding: 0px 0px;
      height: 600px;
      iframe {
        border-radius: 24px 24px 0px 0px;
        padding: 0px 0px;
        margin: 0px 0px;
        width: 100%;
        height: 600px;
        border: none;
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .text-container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .title {
          text-align: center;
        }
      }
    }
  }
`;

export default LandingPagesSectionThree;
