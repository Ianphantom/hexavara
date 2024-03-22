import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { dataProduct } from "../../data/data-product";

const ProductPagesSectionFive = () => {
  const [otherProduct] = useState(dataProduct.filter((item) => !item.isFeatured).reverse().slice(0,4))
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ProductPagesSectionFiveStyled className='container'>
      <div className='product-title'>
        <div className='title display-medium'>Other Products</div>
        <div className='desc paragraph-medium regular'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum neque
          minus, non eveniet ipsam quia et magni error laborum id.
        </div>
      </div>
      <div className='products-container'>
        {otherProduct.map((item) => {
          return (
            !item.isFeatured && (
              <div
                className='product-container'
                key={item.id}
                data-aos='zoom-out'
                data-aos-duration='1500'>
                <div className='icon'>{item.icon}</div>
                <div className='name paragraph-medium'>{item.name}</div>
                <div className='desc paragraph-medium regular'>
                  {item.description}
                </div>
                <div className='more'>
                  <div className='paragraph-medium'>Learn More</div>
                  <svg
                    width='20'
                    height='16'
                    viewBox='0 0 20 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M19.0459 8.79598L12.2959 15.546C12.0846 15.7573 11.7979 15.8761 11.4991 15.8761C11.2002 15.8761 10.9135 15.7573 10.7022 15.546C10.4908 15.3346 10.3721 15.048 10.3721 14.7491C10.3721 14.4502 10.4908 14.1636 10.7022 13.9522L15.5312 9.12504H1.75C1.45163 9.12504 1.16548 9.00652 0.954505 8.79554C0.743526 8.58456 0.625 8.29841 0.625 8.00004C0.625 7.70167 0.743526 7.41552 0.954505 7.20455C1.16548 6.99357 1.45163 6.87504 1.75 6.87504H15.5312L10.7041 2.04504C10.4927 1.8337 10.374 1.54705 10.374 1.24817C10.374 0.949281 10.4927 0.662636 10.7041 0.451292C10.9154 0.239948 11.2021 0.121216 11.5009 0.121216C11.7998 0.121216 12.0865 0.239948 12.2978 0.451292L19.0478 7.20129C19.1527 7.30595 19.2359 7.4303 19.2926 7.5672C19.3493 7.7041 19.3784 7.85085 19.3782 7.99903C19.3781 8.1472 19.3486 8.29389 19.2916 8.43065C19.2346 8.56742 19.1511 8.69157 19.0459 8.79598Z'
                      fill='#3182FF'
                    />
                  </svg>
                </div>
              </div>
            )
          );
        })}
      </div>
    </ProductPagesSectionFiveStyled>
  );
};

const ProductPagesSectionFiveStyled = styled.div`
	padding: 80px 0px;
	.product-title {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 40px;
	}
	.products-container {
		display: inline-grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: space-evenly;
		gap: 24px;
		.product-container {
			position: relative;
			cursor: pointer;
			padding: 12px 16px;
			border-radius: 8px;
			border: 1px solid var(--hxvr-neutral-60, #ccc);
			&:hover {
				background: var(--primary-10);
			}
			.featured {
				position: absolute;
				top: -2px;
				right: 0;
			}
			.icon {
				margin-bottom: 24px;
				width: 54px;
				height: 54px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #ecf6ff;
				border-radius: 50%;
				img {
					width: 54px;
					height: 54px;
				}
			}
			.name {
				color: var(--hxvr-neutral-100);
				margin-bottom: 8px;
			}
			.desc {
				color: var(--hxvr-neutral-secondary);
				margin-bottom: 24px;
			}

			.more {
				display: flex;
				align-items: center;
				gap: 4px;
				color: var(--primary-base);
			}
		}
	}
	@media (max-width: 768px) {
		.products-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`;

export default ProductPagesSectionFive;
