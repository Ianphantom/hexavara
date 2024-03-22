import React from "react";
import styled from "styled-components";

const WorkDetailPagesSectionFive = () => {
  return (
    <WorkDetailPagesSectionFiveStyled>
      <div className='title heading-large'>
        Impact for the <br />
        Client
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
      </div>
    </WorkDetailPagesSectionFiveStyled>
  );
};

const WorkDetailPagesSectionFiveStyled = styled.div`
  padding: 64px 0px;
  display: flex;
  align-items: flex-start;
  .title {
    width: 25%;
    color: var(--hxvr-neutral-100);
  }
  .desc {
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--hxvr-neutral-secondary);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px 0px;
	gap: 16px;
    .title {
      width: 100%;
    }

    .desc {
      width: 100%;
    }
  }
`;

export default WorkDetailPagesSectionFive;
