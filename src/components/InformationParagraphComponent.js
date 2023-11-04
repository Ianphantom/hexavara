import React from "react";
import styled from "styled-components";
import { CountUp } from "use-count-up";
import VisibilitySensor from "react-visibility-sensor";

const InformationParagraphComponent = ({
  text1,
  text2,
  text1Config,
  theme,
}) => {
  console.log("isNan" + isNaN(text1));
  return (
    <InformationParagraphComponentStyled className={theme}>
      <div className={text1Config}>
        {isNaN(parseInt(text1)) ? (
          <>{text1}</>
        ) : (
          <VisibilitySensor>
            {({ isVisible }) => {
              return (
                <div>
                  <CountUp
                    isCounting={isVisible}
                    key={isVisible}
                    end={parseInt(text1)}
                    duration={3.2}
                  />
                </div>
              );
            }}
          </VisibilitySensor>
        )}
      </div>
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
