import React from "react";

import ProductPagesSectionOne from "./ProductPagesSectionOne";
import ProductPagesSectionTwo from "./ProductPagesSectionTwo";
import ProductPagesSectionThree from "./ProductPagesSectionThree";
import ProductPagesSectionFour from "./ProductPagesSectionFour";
import ProductPagesSectionFive from "./ProductPagesSectionFive";
import HappyClientComponent from "../../components/HappyClientComponent";
import CTASectionComponent from "../../components/CTASectionComponent";
import ScrollTop from "../../components/ScrollTop";

const ProductPagesIndex = () => {
  return (
    <div>
	  <ScrollTop/>
      <ProductPagesSectionOne />
      <ProductPagesSectionTwo />
      <ProductPagesSectionThree />
      <ProductPagesSectionFour />
      <ProductPagesSectionFive />
      <HappyClientComponent />
      <CTASectionComponent
        title='Interested?'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
      />
    </div>
  );
};

export default ProductPagesIndex;
