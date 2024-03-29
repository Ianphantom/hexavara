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
            text1='50'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
            text1Config='display-medium'
            theme='primary'
          />
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='102'
          viewBox='0 0 2 102'
          fill='none'
        >
          <path d='M0.833496 1V101' stroke='#3182FF' strokeLinecap='round' />
        </svg>
        <div className='solution-container'>
          <InformationParagraphComponent
            text1='8000'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
            text1Config='display-medium'
            theme='primary'
          />
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='102'
          viewBox='0 0 2 102'
          fill='none'
        >
          <path d='M0.833496 1V101' stroke='#3182FF' strokeLinecap='round' />
        </svg>
        <div className='solution-container'>
          <InformationParagraphComponent
            text1='23'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
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
