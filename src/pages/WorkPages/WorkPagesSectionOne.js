import React from "react";
import styled from "styled-components";

const WorkPagesSectionOne = () => {
  return (
    <WorkPagesSectionOneStyled className='container'>
      <div className='title display-large'>Our Work</div>
      <div className='desc paragraph-large regular'>
        Experience innovation, explore excellence. Our Works exhibit a
        harmonious blend of creativity and functionality, setting new standards
        in design and client satisfaction.
      </div>
    </WorkPagesSectionOneStyled>
  );
};

const WorkPagesSectionOneStyled = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .desc {
    color: var(--hxvr-neutral-secondary);
  }
`;

export default WorkPagesSectionOne;
