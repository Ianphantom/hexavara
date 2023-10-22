import React from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import arrowUpRight from "../assets/svg/arrowUpRight.svg";

const CTASectionComponent = ({ title, desc }) => {
  return (
    <CTASectionComponentStyled>
      <div className='container'>
        <div className='title display-small text-center'>{title}</div>
        {desc ? (
          <div className='desc paragraph-large regular text-center'>{desc}</div>
        ) : (
          ""
        )}

        <div className='button-container'>
          <ButtonComponent
            text='Talk to Us'
            icon={arrowUpRight}
            className='button filled-secondary border-radius-4 pointer paragraph-large'
          ></ButtonComponent>
          <ButtonComponent
            text='Check Our Works'
            className='button outlined-secondary border-radius-4 pointer paragraph-large'
          ></ButtonComponent>
        </div>
      </div>
    </CTASectionComponentStyled>
  );
};

const CTASectionComponentStyled = styled.div`
  background: var(--primary-60);
  padding: 64px 0;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .title {
      max-width: 65%;
      color: var(--hxvr-neutral-30);
    }

    .desc {
      color: var(--hxvr-neutral-30);
      margin-bottom: 16px;
    }

    .button-container {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`;

export default CTASectionComponent;
