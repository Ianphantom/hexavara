import React from "react";
import styled from "styled-components";

const WorkDetailPagesSectionTwo = () => {
  return (
    <WorkDetailPagesSectionTwoStyled className='container'>
      <div className='title heading-large'>
        About <br />
        The Project
      </div>
      <div className='desc'>
        <div className='paragraph-medium regular'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat.
        </div>
        <div className='paragraph-medium regular'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat.
        </div>
      </div>
    </WorkDetailPagesSectionTwoStyled>
  );
};

const WorkDetailPagesSectionTwoStyled = styled.div`
  padding: 20px 0px 60px 0px;
  display: flex;
  align-items: flex-start;
  .title {
    width: 30%;
    color: var(--hxvr-neutral-100);
  }
  .desc {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--hxvr-neutral-secondary);
  }
`;

export default WorkDetailPagesSectionTwo;
