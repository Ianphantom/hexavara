import React from "react";
import styled from "styled-components";

import InformationParagraphComponent from "../../components/InformationParagraphComponent";

const ServicePagesSectionTwo = () => {
  return (
    <ServicePagesSectionTwoStyled className='container'>
      <div className='title text-center heading-large'>Why Hexavara Tech?</div>
      <div className='desc text-center paragraph-medium regular'>
        Established in 2016 with a dedicated focus on software development to
        cater to the IT needs of our valued partners, we've come a long way on
        our journey of growth and development.
      </div>
      <div className='solutions-container'>
        <div className='solution-container'>
          <InformationParagraphComponent
            text1='77'
            text2='77+ satisfied clients trust us for exceptional service and results.'
            text1Config='display-medium'
            theme='primary'
          />
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='102'
          viewBox='0 0 2 102'
          fill='none'>
          <path d='M0.833496 1V101' stroke='#3182FF' strokeLinecap='round' />
        </svg>
        <div className='solution-container'>
          <InformationParagraphComponent
            text1='116'
            text2='116 projects and counting – delivering quality, exceeding expectations every time.'
            text1Config='display-medium'
            theme='primary'
          />
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='102'
          viewBox='0 0 2 102'
          fill='none'>
          <path d='M0.833496 1V101' stroke='#3182FF' strokeLinecap='round' />
        </svg>
        <div className='solution-container'>
          <InformationParagraphComponent
            text1='86 %'
            text2='86% choose us again – a testament to trust and satisfaction.'
            text1Config='display-medium'
            theme='primary'
          />
        </div>
      </div>
    </ServicePagesSectionTwoStyled>
  );
};

const ServicePagesSectionTwoStyled = styled.div`
  .title {
    margin-bottom: 12px;
    color: var(--hxvr-neutral-100);
  }
  .desc {
    color: var(--hxvr-neutral-secondary);
    margin-bottom: 40px;
  }

  .solutions-container {
    display: flex;
    gap: 32px;
    align-items: center;
    margin-bottom: 48px;
	justify-content: space-evenly;
    .solution-container {
      padding: 32px 24px;
    }
  }

  @media (max-width: 768px) {
    .solutions-container {
      flex-direction: column;
      & > svg {
        display: none;
      }
    }
  }
`;

export default ServicePagesSectionTwo;
