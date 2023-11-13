import React from "react";
import styled from "styled-components";

const ProductDetailSectionFour = () => {
  return (
    <ProductDetailSectionFourStyled>
      <div className='container'>
        <div className='title text-center display-large'>
          Managed hospital <span>Efficiently</span>
        </div>
        <div className='title text-center display-large'>with our system</div>
      </div>
    </ProductDetailSectionFourStyled>
  );
};

const ProductDetailSectionFourStyled = styled.div`
  padding: 45px 0px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .title {
    span {
      padding: 24px 48px;
      border-radius: 100px;
      background: var(--primary-base, #3182ff);
      color: var(--hxvr-neutral-30, #fdfdfd);
    }
  }
`;

export default ProductDetailSectionFour;
