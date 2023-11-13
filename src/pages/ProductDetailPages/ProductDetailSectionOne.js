import React from "react";
import styled from "styled-components";

const ProductDetailSectionOne = () => {
  return (
    <ProductDetailSectionOneStyled>
      <div className='container'>
        <div className='title display-large'>Hospital Management System</div>
        <div className='desc paragraph-large regular'>
          Lorem ipsum lor dolor calamet Lorem ipsum lor dolor calametLorem ipsum
          lor dolor calametLorem ipsum lor dolor calametLorem ipsum lor dolor
          calamet.
        </div>
      </div>
    </ProductDetailSectionOneStyled>
  );
};

const ProductDetailSectionOneStyled = styled.div`
  padding: 80px 0px;
  .container {
    .title {
      text-align: center;
      margin-bottom: 11px;
    }

    .desc {
      text-align: center;
      text-wrap: balance;
    }
  }
`;

export default ProductDetailSectionOne;
