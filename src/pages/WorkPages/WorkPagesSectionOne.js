import React from "react";
import styled from "styled-components";

const WorkPagesSectionOne = () => {
  return (
    <WorkPagesSectionOneStyled className='container'>
      <div className='title display-large'>Our Work</div>
      <div className='desc paragraph-large regular'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
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
