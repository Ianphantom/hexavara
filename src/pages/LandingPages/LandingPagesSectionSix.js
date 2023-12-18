import React from "react";
import styled from "styled-components";

const LandingPagesSectionSix = () => {
  return (
    <LandingPagesSectionSixStyled>
      <div className='container'>
        <div className='title heading-large text-center'>
          We have collaborated with <span>50+</span> client partners from Big
          Company and foundation all over Indonesia.
        </div>
      </div>
    </LandingPagesSectionSixStyled>
  );
};

const LandingPagesSectionSixStyled = styled.div`
  padding: 80px 0px;
  background: var(--hxvr-brand-30);
  .container {
    .title {
      color: var(--hxvr-neutral-100);
      span {
        color: var(--primary-base);
      }
    }
  }
`;

export default LandingPagesSectionSix;
