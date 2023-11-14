import React from "react";
import styled from "styled-components";

// import image
import PictureExample from "../../assets/images/productDetailExample.png";

const ProductDetailSectionTwo = () => {
  return (
    <ProductDetailSectionTwoStyled>
      <img src={PictureExample} alt='product-detail' />
    </ProductDetailSectionTwoStyled>
  );
};

const ProductDetailSectionTwoStyled = styled.div`
  background: linear-gradient(to bottom, #fdfdfd 50%, #3182ff 50%);
  text-align: center;
  img {
    max-width: 1392px;
    width: 100%;
    object-fit: cover;
    border-radius: 24px 24px 0px 0px;
  }
`;

export default ProductDetailSectionTwo;
