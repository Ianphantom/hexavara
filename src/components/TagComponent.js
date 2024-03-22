import React from "react";
import styled from "styled-components";

const TagComponent = ({ text, theme }) => {
  return (
    <TagComponentStyled className={`border-radius-medium ${theme}`}>
      <div className='paragraph-small tag-text regular'>{text}</div>
    </TagComponentStyled>
  );
};

const TagComponentStyled = styled.div`
  padding: 4px 8px;
  width: max-content;

  &.primary {
    background: var(--hxvr-brand-30);
    color: var(--hxvr-brand-70);
  }

  &.outlined-primary {
    border: 1px solid var(--hxvr-brand-70);
    color: #3b4145;
  }
`;

export default TagComponent;
