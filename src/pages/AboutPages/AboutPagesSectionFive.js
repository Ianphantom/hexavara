import React from "react";
import styled from "styled-components";

const AboutPagesSectionFive = () => {
  return (
    <AboutPagesSectionFiveStyled className='container'>
      <div className='title text-center display-small'>Meet Our Key Team</div>
      <div className='team-container'></div>
    </AboutPagesSectionFiveStyled>
  );
};

const AboutPagesSectionFiveStyled = styled.div`
  padding: 80px 0px;
  .title {
    color: var(--hxvr-neutral-100);
    margin-bottom: 48px;
  }

  .team-container {
    display: flex;
    align-items: center;
  }
`;

export default AboutPagesSectionFive;
