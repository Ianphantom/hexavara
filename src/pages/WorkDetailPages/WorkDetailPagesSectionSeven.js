import React from "react";
import styled from "styled-components";

const WorkDetailPagesSectionSeven = () => {
  return (
    <WorkDetailPagesSectionSevenStyled>
      <div className='title text-center heading-large'>
        What the client said?
      </div>
      <div className='image text-center'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/5977/5977593.png'
          alt='unilever'
        />
      </div>
      <div className='testimonial text-center'>
        <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </div>
      </div>
    </WorkDetailPagesSectionSevenStyled>
  );
};

const WorkDetailPagesSectionSevenStyled = styled.div`
  padding: 60px 0px;
  .title {
    color: var(--hxvr-neutral-100);
    margin-bottom: 36px;
  }
  .image {
    margin-bottom: 20px;
    img {
      height: 10%;
      width: 10%;
    }
  }
  .testimonial {
    .petik {
      color: var(--hxvr-neutral-secondary);
      text-align: center;
      font-size: 64px;
      font-weight: 600;
      &.2 {
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0px 0px 64px 0px;
  }
`;

export default WorkDetailPagesSectionSeven;
