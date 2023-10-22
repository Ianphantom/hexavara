import React from "react";
import styled from "styled-components";

// import images assets
import hexavaraLogoHeader from "../assets/images/hexavara_header.png";

const HeaderComponent = () => {
  return (
    <HeaderComponentStyled>
      <div className='container'>
        <div className='logo'>
          <img src={hexavaraLogoHeader} alt='Hexavara Logo' />
        </div>
        <div className='navigation'>
          <div className='paragraph-medium regular'>Works</div>
          <div className='paragraph-medium regular'>About Us</div>
          <div className='paragraph-medium regular'>Products</div>
          <div className='paragraph-medium regular'>Services</div>
        </div>
        <div className='cta paragraph-medium regular'>Start a Project?</div>
      </div>
    </HeaderComponentStyled>
  );
};

const HeaderComponentStyled = styled.div`
  padding: 24px 0px;
  box-shadow: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      cursor: pointer;
    }

    .navigation {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    .cta {
      cursor: pointer;
      background: var(--hxvr-brand-70);
      border-radius: 8px;
      padding: 10px 16px;
      color: white;
    }
  }
`;

export default HeaderComponent;
