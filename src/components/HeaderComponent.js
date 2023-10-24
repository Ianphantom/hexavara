import React, { useState } from "react";
import styled from "styled-components";

// import component
import ButtonComponent from "./ButtonComponent";

// import images assets
import hexavaraLogoHeader from "../assets/images/hexavara_header.png";
import caretDown from "../assets/svg/caretDown.svg";

// import data
import { dataProduct } from "../data/data-product";

const ProductMenu = () => {
  return (
    <div className='product-sub-list show'>
      <div>
        <div className='row'>
          {dataProduct.map((item) => (
            <ProductItemStyled className='col-md-6 pointer' key={item.id}>
              <div className='logo-product'>
                <img src={item.icon} alt={item.name} />
              </div>
              <div className='product-information'>
                <div className='product-title paragraph-medium'>
                  {item.name}
                </div>
                <div className='small-not-show product-description paragraph-medium regular'>
                  {item.description}
                </div>
              </div>
            </ProductItemStyled>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeaderComponent = () => {
  const [showProductMenu, setShowProductMenu] = useState(0);
  return (
    <HeaderComponentStyled>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <img
            className='pointer'
            src={hexavaraLogoHeader}
            alt='Hexavara Logo'
          />
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse navbar-container'
            id='navbarNavAltMarkup'
          >
            <div className='navbar-nav navigation mx-auto'>
              <div className='paragraph-medium regular pointer'>Works</div>
              <div className='paragraph-medium regular pointer'>About Us</div>
              <div
                className='paragraph-medium regular pointer'
                onClick={() => setShowProductMenu(!showProductMenu)}
              >
                Products{" "}
                <img
                  src={caretDown}
                  alt='detail-icon'
                  className={`icon ${showProductMenu ? "rotate-180" : ""}`}
                />
              </div>
              {showProductMenu ? <ProductMenu /> : ""}
              <div className='paragraph-medium regular pointer'>Services</div>
            </div>
            <div className='button-container'>
              <ButtonComponent
                text='Start a Project?'
                className='button filled-primary border-radius-medium pointer'
              />
            </div>
          </div>
        </nav>
      </div>
    </HeaderComponentStyled>
  );
};

const HeaderComponentStyled = styled.div`
  padding: 24px 0px;
  box-shadow: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  position: relative;

  .navbar {
    display: flex !important;
    justify-content: space-between;
  }

  .product-sub-list {
    padding: 20px 0px;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    background: var(--hxvr-neutral-30);
    box-shadow: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  }
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  .icon {
    transition: transform 0.5s;
  }

  .rotate-180 {
    transform: rotate(180deg);
  }

  @media (max-width: 991px) {
    .navigation {
      align-items: flex-start;
    }

    .navbar-container {
      padding: 24px 20px;
      background: #fcfcfc;
    }

    .button-container {
      margin-top: 32px;
    }

    .product-sub-list {
      position: static;
    }
  }

  @media (max-width: 768px) {
    /* .product-sub-list {
      position: static;
    } */
  }
`;

const ProductItemStyled = styled.div`
  background: var(--hxvr-neutral-30);
  padding: 12px 16px;
  display: flex;
  gap: 24px;
  .product-information {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .product-title {
      color: var(--hxvr-neutral-100);
    }

    .product-description {
      color: var(--hxvr-neutral-secondary);
    }
  }
`;

export default HeaderComponent;
