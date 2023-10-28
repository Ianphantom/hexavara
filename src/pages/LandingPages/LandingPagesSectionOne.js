import React from "react";
import styled from "styled-components";

// immport component
import ButtonComponent from "../../components/ButtonComponent";

// import icon
import arrowUpRight from "../../assets/svg/arrowUpRight.svg";
import jumbotron from "../../assets/images/jumbotron.png";

const LandingPagesSectionOne = () => {
  return (
    <LandingPagesSectionOneStyled>
      <div className='container'>
        <div className='title display-large'>
          The best idea is comprehensive solution
        </div>
        <div className='button-cta-container'>
          <ButtonComponent
            text='Talk to Us'
            icon={arrowUpRight}
            className='button filled-secondary border-radius-4 pointer paragraph-large'
          />
          <div className='works paragraph-large pointer'>Check our works</div>
        </div>
      </div>
    </LandingPagesSectionOneStyled>
  );
};

const LandingPagesSectionOneStyled = styled.div`
  background: linear-gradient(
      180deg,
      rgba(13, 13, 13, 0.2) 17.27%,
      #052a4b 110.15%
    ),
    url(${jumbotron});

  background-size: cover;
  .container {
    padding: 214px 0px;
    .title {
      color: var(--hxvr-neutral-30);
      width: 55%;
      margin-bottom: 32px;
    }
    .button-cta-container {
      display: flex;
      gap: 20px;
      align-items: center;
      .works {
        padding: 12px 16px;
        color: var(--hxvr-neutral-30);
        text-decoration: underline;
      }
    }
  }
`;

export default LandingPagesSectionOne;
