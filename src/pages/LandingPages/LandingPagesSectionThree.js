import React from "react";

import styled from "styled-components";

const LandingPagesSectionThree = () => {
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
        <div className='video-container'>
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
      padding: 0px;
      iframe {
        border-radius: 24px 24px 0px 0px;

        margin: 0;
        width: 100%;
        height: 521px;
      }
    }
  }
`;

export default LandingPagesSectionThree;
