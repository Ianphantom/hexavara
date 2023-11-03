import React from "react";

import styled from "styled-components";

const LandingPagesSectionTwo = () => {
  return (
    <LandingPagesSectionTwoStyled>
      <div className='left'>
        <div className='title display-medium '>Build Trust</div>
        <div className='desc paragraph-large regular'>
          Established in 2016 with a dedicated focus on software development to
          cater to the IT needs of our valued partners, we've come a long way on
          our journey of growth and development.
        </div>
      </div>
      <div className='right'>
        <div className='number-container'>
          <div className='number display-medium'>150+</div>
          <div className='desc paragraph-large regular'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </div>
        </div>
        <div className='number-container'>
          <div className='number display-medium'>150+</div>
          <div className='desc paragraph-large regular'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </div>
        </div>
        <div className='number-container'>
          <div className='number display-medium'>150+</div>
          <div className='desc paragraph-large regular'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </div>
        </div>
      </div>
    </LandingPagesSectionTwoStyled>
  );
};

const LandingPagesSectionTwoStyled = styled.div`
  padding: 80px 0px;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  .left {
    width: 50%;
    .title {
      color: var(--hxvr-neutral-100);
      margin-bottom: 12px;
    }
    .desc {
      color: var(--hxvr-neutral-secondary);
    }
    position: sticky;
    top: 80px;
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    .number-container {
      padding: 60px 24px;
      background: var(--primary-80);
      border-radius: 8px;
    }

    .number-container,
    .desc {
      color: var(--hxvr-neutral-30);
    }
  }
`;

export default LandingPagesSectionTwo;