import React from "react";
import styled from "styled-components";

const WorkPagesTagButtonComponent = ({
  text,
  setTagActive,
  tagActive,
  theme,
}) => {
  return (
    <WorkPagesTagButtonComponentStyled
      className={`pointer ${theme} ${tagActive === text ? "active" : ""}`}
      onClick={() => setTagActive(text)}
    >
      <div className='text paragraph-large regular'>{text}</div>
    </WorkPagesTagButtonComponentStyled>
  );
};

const WorkPagesTagButtonComponentStyled = styled.div`
  padding: 4px 20px;
  border-radius: 36px;
  border: 1px solid var(--hxvr-brand-70);
  transition: background linear 0.5s;
  &.active {
    background: var(--hxvr-brand-70);
    .text {
      color: var(--hxvr-neutral-30);
    }
  }
  .text {
    color: var(--hxvr-brand-70);
    width: max-content;
  }
  &.outlined-normal {
    background: rgba(252, 252, 252, 1);
    border-radius: 36px;
    border: 1px solid var(--hxvr-neutral-70, #b5b5b5);
    .text {
      color: var(--hxvr-neutral-80);
    }
  }
  &.outlined-normal.active {
    border-radius: 36px;
    border: 1px solid var(--hxvr-brand-70, #3182ff);
    .text {
      color: var(--hxvr-brand-70, #3182ff);
    }
  }
`;

export default WorkPagesTagButtonComponent;
