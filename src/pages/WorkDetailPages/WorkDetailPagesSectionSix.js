import React from "react";
import styled from "styled-components";

const WorkDetailPagesSectionSix = () => {
  return (
    <WorkDetailPagesSectionSixStyled className='container'>
      <ItemContainerStyled>
        <div className='image'>
          <img
            src='https://i.pinimg.com/736x/47/cc/38/47cc381808321e149adf815d3701eb8d.jpg'
            alt='module'
          />
        </div>
        <div className='modules'>
          <div className='title-container'>
            <div className='title heading-large'>Featured Module</div>
            <div className='desc paragraph-large regular'>
              Lorem ipsum del culametan metmet.
            </div>
          </div>
          <div className='modules-container'>
            <div className='module-container'>
              <div className='module-title title heading-small'>Module 1</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum del culametan metmet Lorem ipsum del culametan
                metmetLorem ipsum del culametan metmetLorem ipsum del culametan.
              </div>
            </div>
            <div className='module-container'>
              <div className='module-title title heading-small'>Module 2</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum del culametan metmet Lorem ipsum del culametan
                metmetLorem ipsum del culametan metmetLorem ipsum del culametan.
              </div>
            </div>
            <div className='module-container'>
              <div className='module-title title heading-small'>Module 3</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum del culametan metmet Lorem ipsum del culametan
                metmetLorem ipsum del culametan metmetLorem ipsum del culametan.
              </div>
            </div>
          </div>
        </div>
      </ItemContainerStyled>
      <ItemContainerStyled className='reversed'>
        <div className='image'>
          <img
            src='https://i.pinimg.com/736x/ff/a7/c0/ffa7c00a341b27b9197d112b73e2bd6b.jpg'
            alt='module'
          />
        </div>
        <div className='modules'>
          <div className='title-container'>
            <div className='title heading-large'>Featured Module</div>
            <div className='desc paragraph-large regular'>
              Lorem ipsum del culametan metmet.
            </div>
          </div>
          <div className='modules-container'>
            <div className='module-container'>
              <div className='module-title title heading-small'>Module 1</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum del culametan metmet Lorem ipsum del culametan
                metmetLorem ipsum del culametan metmetLorem ipsum del culametan.
              </div>
            </div>
            <div className='module-container'>
              <div className='module-title title heading-small'>Module 2</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum del culametan metmet Lorem ipsum del culametan
                metmetLorem ipsum del culametan metmetLorem ipsum del culametan.
              </div>
            </div>
            <div className='module-container'>
              <div className='module-title title heading-small'>Module 3</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum del culametan metmet Lorem ipsum del culametan
                metmetLorem ipsum del culametan metmetLorem ipsum del culametan.
              </div>
            </div>
          </div>
        </div>
      </ItemContainerStyled>
    </WorkDetailPagesSectionSixStyled>
  );
};

const WorkDetailPagesSectionSixStyled = styled.div`
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ItemContainerStyled = styled.div`
  &.reversed {
    flex-direction: row-reverse;
  }
  display: flex;
  align-items: stretch;
  gap: 60px;
  .image {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      object-fit: cover;
    }
  }
  .modules {
    width: 50%;
    .title {
      color: var(--hxvr-neutral-100);
    }
    .desc {
      color: var(--hxvr-neutral-secondary);
    }
    .title-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 24px;
    }
    .modules-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .module-container {
        padding: 16px 16px;
        border-radius: 8px;
        border: 1px solid var(--primary-base, #3182ff);
      }
    }
  }
`;

export default WorkDetailPagesSectionSix;
