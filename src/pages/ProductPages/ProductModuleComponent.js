import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const ProductModuleComponent = ({ img, title, desc, modules, isReversed }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ProductModuleComponentStyled
      className={` product-container ${isReversed ? "reverse" : ""}`}
    >
      <div className='left'>
        <img src={img} alt='product-preview' />
      </div>
      <div className='right'>
        <div className='summary'>
          <div className='title heading-large'>{title}</div>
          <div className='desc paragraph-large regular'>{desc}</div>
        </div>
        <div className='modules-cotainer'>
          {modules.map((item, index) => (
            <div
              key={item.id}
              className='module-container'
              data-aos='fade-up'
              data-aos-duration='200'
              data-aos-delay={index * 200}
            >
              <div className='title heading-small'>{item.title}</div>
              <div className={`desc paragraph-medium regular`}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ProductModuleComponentStyled>
  );
};

const ProductModuleComponentStyled = styled.div`
  &.product-container {
    &.reverse {
      flex-direction: row-reverse;
    }
    padding: 80px 0px;
    display: flex;
    align-items: stretch;
    gap: 61px;
  }
  & > div {
    width: 50%;
  }
  .title {
    color: var(--hxvr-neutral-100);
  }
  .desc {
    color: var(--hxvr-neutral-secondary);
  }
  .left {
    img {
      width: 100%;
      border-radius: 12px;
      object-fit: cover;
      height: 100%;
      transition: all 0.5s ease;
    }
  }

  .right {
    .summary {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 20px;
    }
    .module-container {
      padding: 36px 36px;
      border-bottom: solid 1px #296cd4;
      cursor: pointer;
      transition: all 0.5s ease;
      .desc {
        display: none;
      }
      &:hover {
        border-radius: 12px;
        border: none;
        border: solid 1px #296cd4;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02),
          0px 10px 8px 0px rgba(0, 0, 0, 0.03),
          0px 10px 16px 0px rgba(0, 0, 0, 0.08),
          0px 40px 32px 0px rgba(0, 0, 0, 0.05),
          0px 80px 60px 0px rgba(0, 0, 0, 0.06),
          0px 120px 100px 0px rgba(0, 0, 0, 0.07);

        .desc {
          display: block;
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.product-container {
      flex-direction: column;
      & > div {
        width: 100%;
      }
      &.reverse {
        flex-direction: column;
      }
    }
  }
`;

export default ProductModuleComponent;
