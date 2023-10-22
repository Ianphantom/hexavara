import React from "react";
import styled from "styled-components";

const ButtonComponent = ({ text, ...otherProps }) => {
  return (
    <ButtonComponentStyled>
      <div {...otherProps}>{text}</div>
    </ButtonComponentStyled>
  );
};

const ButtonComponentStyled = styled.div`
  .button {
    padding: 12px 16px;
  }

  .filled-primary {
    background: var(--hxvr-brand-70);
    color: var(--hxvr-neutral-30);
  }

  .outlined-primary {
    border: 1px solid var(--hxvr-brand-70);
    background: var(--hxvr-neutral-30);
    color: var(--hxvr-brand-70);
  }

  .filled-secondary {
    background: var(--hxvr-neutral-30);
    color: var(--primary-base);
  }

  .outlined-secondary {
    border: 1px solid var(--hxvr-neutral-30);
    color: var(--hxvr-neutral-30);
    background: var(--hxvr-brand-70);
  }
`;

export default ButtonComponent;
