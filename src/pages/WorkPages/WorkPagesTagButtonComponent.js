import React from "react";
import styled from "styled-components";

const WorkPagesTagButtonComponent = ({ text, setTagActive, tagActive }) => {
  return (
    <WorkPagesTagButtonComponentStyled
      className={`pointer ${tagActive === text ? "active" : ""}`}
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
`;

export default WorkPagesTagButtonComponent;
