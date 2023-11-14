import React from "react";
import ProductDetailSectionOne from "./ProductDetailSectionOne";
import ProductDetailSectionTwo from "./ProductDetailSectionTwo";
import ProductDetailSectionThree from "./ProductDetailSectionThree";
import ProductDetailSectionFour from "./ProductDetailSectionFour";
import ProductDetailSectionFive from "./ProductDetailPagesSectionFive";
import ProductDetailSectionSix from "./ProductDetailSectionSix";
import ProductDetailSectionSeven from "./ProductDetailSectionSeven";
import HappyClientComponent from "../../components/HappyClientComponent";
import CTASectionComponent from "../../components/CTASectionComponent";
import ProductPagesSectionFive from "../ProductPages/ProductPagesSectionFive";
import ScrollTop from "../../components/ScrollTop";

const ProductDetailPagesIndex = () => {
  return (
    <div>
      <ScrollTop />
      <ProductDetailSectionOne />
      <ProductDetailSectionTwo />
      <ProductDetailSectionThree />
      <ProductDetailSectionFour />
      <ProductDetailSectionFive />
      <ProductDetailSectionSix />
      <ProductDetailSectionSeven />
      <HappyClientComponent />
      <CTASectionComponent
        title='Interested'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
      />
      <ProductPagesSectionFive />
    </div>
  );
};

export default ProductDetailPagesIndex;
