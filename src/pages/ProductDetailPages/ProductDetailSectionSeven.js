import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent";
import arrowUpRight from "../../assets/svg/arrowUpRight.svg";
const ProductDetailSectionSeven = () => {
  return (
    <ProductDetailSectionSevenStyled>
      <div className='container'>
        <div className='header'>
          <div className='title heading-large'>Featured Modules</div>
          <div className='desc paragraph-medium regular'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </div>
        </div>
        <div className='modules-container'>
          {["1", "2", "3", "4", "5", "6", "7", "8"].map((item, index) => (
            <div
              className={`module-container ${
                index < 4 ? "border-bottom" : ""
              } ${(index + 1) % 4 !== 0 ? "border-right" : ""}`}
              key={item}
            >
              <svg
                width='54'
                height='54'
                viewBox='0 0 54 54'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='54' height='54' rx='27' fill='#ECF6FF' />
                <path
                  d='M40 24V30C40 30.5304 39.7893 31.0391 39.4142 31.4142C39.0391 31.7893 38.5304 32 38 32H32V38C32 38.5304 31.7893 39.0391 31.4142 39.4142C31.0391 39.7893 30.5304 40 30 40H24C23.4696 40 22.9609 39.7893 22.5858 39.4142C22.2107 39.0391 22 38.5304 22 38V32H16C15.4696 32 14.9609 31.7893 14.5858 31.4142C14.2107 31.0391 14 30.5304 14 30V24C14 23.4696 14.2107 22.9609 14.5858 22.5858C14.9609 22.2107 15.4696 22 16 22H22V16C22 15.4696 22.2107 14.9609 22.5858 14.5858C22.9609 14.2107 23.4696 14 24 14H30C30.5304 14 31.0391 14.2107 31.4142 14.5858C31.7893 14.9609 32 15.4696 32 16V22H38C38.5304 22 39.0391 22.2107 39.4142 22.5858C39.7893 22.9609 40 23.4696 40 24Z'
                  fill='#3182FF'
                />
              </svg>
              <div className='modul-name paragraph-medium'>{`[Modul ${item}]`}</div>
              <div className='modul-desc paragraph-medium regular'>
                lorem ipsum del calamet lorem ipsum del calamet lorem ipsum del
                calamet lorem ipsum del calamet .
              </div>
            </div>
          ))}
        </div>
        <div className='all-project text-center'>
          <ButtonComponent
            text='Read our deck'
            icon={arrowUpRight}
            className='button outlined-primary border-radius-4 pointer paragraph-large'
          ></ButtonComponent>
        </div>
      </div>
    </ProductDetailSectionSevenStyled>
  );
};

const ProductDetailSectionSevenStyled = styled.div`
  padding: 80px 0px;
  .container {
    display: flex;
    gap: 40px;
    flex-direction: column;
    .header {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .desc {
        color: var(--hxvr-neutral-secondary);
      }
    }
    .modules-container {
      display: inline-grid;
      grid-template-columns: repeat(4, 1fr);
      justify-content: space-evenly;
      gap: 0px;
      .module-container {
        padding: 20px 20px;
        svg {
          margin-bottom: 24px;
        }
        .modul-name {
          margin-bottom: 8px;
        }

        &.border-right {
          border-right: 1px solid var(--hxvr-neutral-60, #ccc);
        }

        &.border-bottom {
          border-bottom: 1px solid var(--hxvr-neutral-60, #ccc);
        }
      }
    }
    .all-project {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      .modules-container {
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-evenly;
        gap: 24px;
        .module-container {
          border: 1px solid var(--hxvr-neutral-60, #ccc);
          border-radius: 8px;
        }
      }
    }
  }
`;

export default ProductDetailSectionSeven;
