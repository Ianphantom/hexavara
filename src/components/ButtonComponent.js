import React from "react";
import styled from "styled-components";

const ButtonComponent = ({ text, icon, ...otherProps }) => {
  return (
    <ButtonComponentStyled>
      <div {...otherProps}>
        <div>{text}</div>
        {icon ? <img src={icon} alt='icon-preview' /> : ""}
      </div>
    </ButtonComponentStyled>
  );
};

const ButtonComponentStyled = styled.div`
  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .button {
    padding: 12px 16px;
  }

  .filled-primary {
    background: var(--hxvr-brand-70);
    color: var(--hxvr-neutral-30);
  }

  .outlined-primary {
    border: 1px solid var(--hxvr-brand-70);
    background: transparent;
    color: var(--hxvr-brand-70);
  }

  .filled-secondary {
    background: var(--hxvr-neutral-30);
    color: var(--primary-base);
  }

  .outlined-secondary {
    border: 1px solid var(--hxvr-neutral-30);
    color: var(--hxvr-neutral-30);
  }
`;

export default ButtonComponent;
