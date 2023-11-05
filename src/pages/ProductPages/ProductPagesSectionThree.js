import React from "react";
import styled from "styled-components";

const ProductPagesSectionThree = () => {
  return (
    <ProductPagesSectionThreeStyled>
      <div className='container'>
        <div className='display-medium text-center'>
          Our Digital Solution for Growing Your Business
        </div>
      </div>
    </ProductPagesSectionThreeStyled>
  );
};

const ProductPagesSectionThreeStyled = styled.div`
  padding: 80px 0px;
  color: var(--primary-10);
  background: var(--primary-60);
`;

export default ProductPagesSectionThree;
