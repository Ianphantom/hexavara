import React from "react";
import styled from "styled-components";

import InformationParagraphComponent from "../../components/InformationParagraphComponent";

const WorkDetailPagesSectionThree = () => {
  return (
    <WorkDetailPagesSectionThreeStyled className='container'>
      <div className='title text-center heading-large'>Our Solution</div>
      <div className='desc text-center paragraph-medium regular'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
      </div>
      <div className='solutions-container'>
        <div className='solution-container'>
          <InformationParagraphComponent
            text1='[Value 1]'
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
            text1='[Value 2]'
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
            text1='[Value 3]'
            text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
            text1Config='display-medium'
            theme='primary'
          />
        </div>
      </div>
    </WorkDetailPagesSectionThreeStyled>
  );
};

const WorkDetailPagesSectionThreeStyled = styled.div`
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
    .solutions-container{
		flex-direction: column;
		gap: 16px;
	}
	svg {
		display: none;
	}
  }
`;

export default WorkDetailPagesSectionThree;
