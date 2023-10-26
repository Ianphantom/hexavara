import React from "react";
import styled from "styled-components";

// import component
import InformationParagraphComponent from "../../components/InformationParagraphComponent";

const AboutPagesSectionThree = () => {
  return (
    <AboutPagesSectionThreeStyled>
      <div className='title text-center display-small'>Our Principles</div>
      <div className='paragraph-container'>
        <div className='paragraph-card border-radius-medium'>
          <InformationParagraphComponent
            text1='50+'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
            text1Config='display-medium'
            theme='primary'
          />
        </div>
        <div className='paragraph-card border-radius-medium'>
          <InformationParagraphComponent
            text1='150+'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
            text1Config='display-medium'
            theme='primary'
          />
        </div>
        <div className='paragraph-card border-radius-medium'>
          <InformationParagraphComponent
            text1='60+'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
            text1Config='display-medium'
            theme='primary'
          />
        </div>
      </div>
    </AboutPagesSectionThreeStyled>
  );
};

const AboutPagesSectionThreeStyled = styled.div`
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .title {
    color: var(--hxvr-neutral-100);
  }
  .paragraph-container {
    display: flex;
    align-items: center;
    gap: 32px;
    .paragraph-card {
      padding: 32px 24px;
      border: 1px solid var(--hxvr-neutral-50);
    }
  }
  @media (max-width: 768px) {
    .paragraph-container {
      flex-direction: column;
    }
  }
`;

export default AboutPagesSectionThree;
