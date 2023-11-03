import React from "react";
import styled from "styled-components";

// import assets
import arrowUpRight from "../../assets/svg/arrowUpRight.svg";

// import component
import TagComponent from "../../components/TagComponent";
import ButtonComponent from "../../components/ButtonComponent";

const LandingPagesSectionSeven = () => {
  return (
    <LandingPagesSectionSevenStyled className='container'>
      <div className='title-container'>
        <div className='title display-medium'>Our Latest Cool Projects</div>
      </div>
      <div className='projects-container'>
        <div className='left'>
          <div className='project-container pointer'>
            <div className='image-container '>
              <img
                className='small-image'
                src='https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg'
                alt='project-preview'
              />
            </div>
            <TagComponent text='Software Development' theme='primary' />
            <div className='title heading-small'>
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className='desc paragraph-medium regular'>
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
          <div className='project-container pointer'>
            <div className='image-container '>
              <img
                src='https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg'
                alt='project-preview'
              />
            </div>
            <TagComponent text='Software Development' theme='primary' />
            <div className='title heading-small'>
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className='desc paragraph-medium regular'>
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='project-container pointer'>
            <div className='image-container '>
              <img
                src='https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg'
                alt='project-preview'
              />
            </div>
            <TagComponent text='Software Development' theme='primary' />
            <div className='title heading-small'>
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className='desc paragraph-medium regular'>
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
          <div className='project-container pointer'>
            <div className='image-container '>
              <img
                className='small-image'
                src='https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg'
                alt='project-preview'
              />
            </div>
            <TagComponent text='Software Development' theme='primary' />
            <div className='title heading-small'>
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className='desc paragraph-medium regular'>
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
        </div>
      </div>
      <div className='all-project text-center'>
        <ButtonComponent
          text='See All Projects'
          icon={arrowUpRight}
          className='button outlined-primary border-radius-4 pointer paragraph-large'
        ></ButtonComponent>
      </div>
    </LandingPagesSectionSevenStyled>
  );
};

const LandingPagesSectionSevenStyled = styled.div`
  padding: 60px 0px 20px 0px;
  .title-container {
    margin-bottom: 48px;
    .title {
      color: var(--hxvr-neutral-100);
    }
  }

  .projects-container {
    display: flex;
    gap: 24px;
    align-items: stretch;
    margin-bottom: 48px;
    .project-container {
      padding: 32px 24px;
      .image-container {
        margin-bottom: 32px;
        img {
          border-radius: 12px;
          height: 698px;
          width: 100%;
          object-fit: cover;

          &.small-image {
            height: 500px;
          }
        }
      }

      .title {
        margin-top: 32px;
        margin-bottom: 8px;
      }
      .desc {
        color: var(--hxvr-neutral-secondary);
      }
    }
  }

  .all-project {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .projects-container {
      flex-direction: column;
    }
  }
`;

export default LandingPagesSectionSeven;
