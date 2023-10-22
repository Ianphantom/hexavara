import React from "react";
import styled from "styled-components";

const InformationParagraphComponent = ({
  text1,
  text2,
  text1Config,
  theme,
}) => {
  return (
    <InformationParagraphComponentStyled className={theme}>
      <div className={text1Config}>{text1}</div>
      <div>{text2}</div>
    </InformationParagraphComponentStyled>
  );
};

const InformationParagraphComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.primary {
    div:first-child {
      color: var(--hxvr-brand-70);
    }
    div:nth-child(2) {
      color: var(--hxvr-neutral-secondary);
    }
  }

  &.secondary {
    div:first-child,
    div:nth-child(2) {
      color: var(--hxvr-neutral-30);
    }
  }
`;

export default InformationParagraphComponent;
