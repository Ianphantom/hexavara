import React from "react";
import styled from "styled-components";
import InformationParagraphComponent from "../../components/InformationParagraphComponent";

const ProductDetailSectionFive = () => {
  return (
    <ProductDetailPagesSectionFiveStyled>
      <div className='container'>
        <div className='solutions-container'>
          <div className='solution-container'>
            <InformationParagraphComponent
              text1='Value'
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
              text1='Value'
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
              text1='Value'
              text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
              text1Config='display-medium'
              theme='primary'
            />
          </div>
        </div>
      </div>
    </ProductDetailPagesSectionFiveStyled>
  );
};

const ProductDetailPagesSectionFiveStyled = styled.div`
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

export default ProductDetailSectionFive;
