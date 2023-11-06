import React from "react";
import ProductModuleComponent from "./ProductModuleComponent";

import { dataProduct } from "../../data/data-product";

const ProductPagesSectionFour = () => {
  return (
    <div>
      <div className='container'>
        {dataProduct.map((item, index) => {
          return (
            item.isFeatured && (
              <ProductModuleComponent
                key={item.id}
                img={item.image}
                title={item.name}
                desc={item.description}
                modules={item.modules}
                isReversed={index % 2 === 0}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default ProductPagesSectionFour;
