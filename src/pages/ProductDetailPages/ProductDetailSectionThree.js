import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import detailImages from "../../assets/images/detailImages1.png";

import ButtonComponent from "../../components/ButtonComponent";
import { ArrowUpRight } from '@phosphor-icons/react';


const ProductDetailSectionThree = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ProductDetailSectionThreeStyled
      data-aos='fade-up'
      data-aos-duration='1500'>
      <div className='container'>
        <div className='bottom-container'>
          <div className='desc-container paragraph-large regular'>
            <div className='title display-small'>Why choose Hexavara?</div>
            <div className='desc paragraph-large regular'>
              Lorem ipsum lor dolor calamet Lorem ipsum lor dolor calametLorem
              ipsum lor dolor calametLorem ipsum lor dolor calametLorem ipsum
              lor dolor calamet. Lorem ipsum lor dolor calamet Lorem ipsum lor
              dolor calametLorem ipsum lor dolor calametLorem ipsum lor dolor
              calametLorem ipsum lor dolor calamet.Lorem ipsum lor dolor calamet
              Lorem ipsum lor dolor calametLorem ipsum lor dolor calametLorem
              ipsum lor dolor calametLorem ipsum lor dolor calamet.
            </div>
            <div className='button-container'>
              <ButtonComponent
                text='Talk to Us'
                icon={<ArrowUpRight size={32} />}
                className='button outlined-primary border-radius-4 pointer paragraph-large'></ButtonComponent>
            </div>
          </div>
          <div className='image-container'>
            <img
              data-aos='zoom-in'
              data-aos-duration='1500'
              data-aos-delay='750'
              src={detailImages}
              alt='culture'
            />
          </div>
        </div>
      </div>
    </ProductDetailSectionThreeStyled>
  );
};

const ProductDetailSectionThreeStyled = styled.div`
  padding: 80px 0px;
  background: var(--hxvr-neutral-40);
  .container {
    .bottom-container {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: 72px;
      .desc-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 32px;
        .title {
          color: var(--hxvr-neutral-100);
        }
        .desc {
          color: var(--hxvr-neutral-secondary);
        }
        .button-container {
          max-width: max-content;
        }
      }
      .image-container {
        width: 50%;
        height: 666px;
        position: relatives;
        img {
          position: absolute;
          border-radius: 24px 0px 0px 0px;
          left: 0;
          height: 666px;
          width: 50%;
          object-position: center right;
          object-fit: fill;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .bottom-container {
      width: 100%;
      gap: 26px;
      .desc-container {
        width: 100% !important;
      }
      .image-container {
        display: none;
        width: 100%;
        height: 160px !important;
        img {
          height: 240px !important;
          width: 90% !important;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .bottom-container {
      flex-direction: column !important;
      .desc-container {
        width: 100% !important;
      }
      .image-container {
        display: none;
      }
    }
  }
`;

export default ProductDetailSectionThree;
