import React from "react";
import styled from "styled-components";

const TagComponent = ({ text, theme }) => {
  return (
    <TagComponentStyled className={`border-radius-medium ${theme}`}>
      <div className='paragraph-small tag-text'>{text}</div>
    </TagComponentStyled>
  );
};

const TagComponentStyled = styled.div`
  padding: 4px 8px;

  &.primary {
    background: var(--hxvr-brand-30);
    color: var(--hxvr-brand-70);
  }
`;

export default TagComponent;
