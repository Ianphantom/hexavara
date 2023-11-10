import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';
import arrowUpRight from '../assets/svg/arrowUpRight.svg';
import { Link } from 'react-router-dom';

const CTASectionComponent = ({ title, desc }) => {
  return (
    <CTASectionComponentStyled>
      <div className='container'>
        <div className='title display-small text-center'>{title}</div>
        {desc ? (
          <div className='desc paragraph-large regular text-center'>{desc}</div>
        ) : (
          ''
        )}

        <div className='button-container'>
          <a
            href='https://api.whatsapp.com/send?phone=6282389424609'
            target='_blank'
            rel='noopener noreferrer'>
            <ButtonComponent
              text='Talk to Us'
              icon={arrowUpRight}
              className='button filled-secondary border-radius-4 pointer paragraph-large'></ButtonComponent>
          </a>
          <Link to='/works'>
            <ButtonComponent
              text='Check Our Works'
              className='button outlined-secondary border-radius-4 pointer paragraph-large'></ButtonComponent>
          </Link>
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
      width: 70%;
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
  @media (max-width: 768px) {
    .title {
      width: 100% !important;
    }
    .button-container {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export default CTASectionComponent;
