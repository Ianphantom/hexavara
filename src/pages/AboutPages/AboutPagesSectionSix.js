import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

// import images
import inside1 from "../../assets/images/inside-1.png";
import inside2 from "../../assets/images/inside-2.png";
import inside3 from "../../assets/images/inside-3.png";
import inside4 from "../../assets/images/inside-4.png";
import inside5 from "../../assets/images/inside-5.png";
import inside6 from "../../assets/images/inside-6.png";
import inside7 from "../../assets/images/inside-7.png";

const AboutPagesSectionSix = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutPagesSectionSixStyled>
      <div className='title display-medium container'>Inside Hexavara</div>
      <div className='images-container'>
        <div
          className='top inside-container'
          data-aos='zoom-out-right'
          data-aos-duration='500'
        >
          <div className='image-container width-15'>
            <img className='border-right' src={inside1} alt='team' />
          </div>
          <div className='image-container width-55'>
            <img src={inside2} alt='team' />
          </div>
          <div className='image-container width-15'>
            <img src={inside3} alt='team' />
          </div>
          <div className='image-container width-15'>
            <img className='border-left' src={inside4} alt='team' />
          </div>
        </div>
        <div
          className='top inside-container'
          data-aos='zoom-out-left'
          data-aos-duration='500'
        >
          <div className='image-container width-10'>
            <img className='border-right' src={inside5} alt='team' />
          </div>
          <div className='image-container width-50'>
            <img src={inside6} alt='team' />
          </div>
          <div className='image-container width-40'>
            <img className='border-left' src={inside7} alt='team' />
          </div>
        </div>
      </div>
    </AboutPagesSectionSixStyled>
  );
};

const AboutPagesSectionSixStyled = styled.div`
  padding: 64px 0px 80px 0px;
  .title {
    color: var(--hxvr-neutral-100);
    margin-bottom: 64px;
  }
  .images-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .inside-container {
      display: flex;
      gap: 16px;
      .image-container {
        color: green;

        img {
          width: 100%;
          height: 384px;
          object-fit: cover;
          border-radius: 12px;
          object-position: center center;
          &.border-right {
            border-radius: 0px 12px 12px 0px;
            object-position: center right;
          }
          &.border-left {
            border-radius: 12px 0px 0px 12px;
            object-position: center left;
          }
        }
        &.width-10 {
          width: 10%;
        }
        &.width-15 {
          width: 15%;
        }
        &.width-40 {
          width: 40%;
        }
        &.width-50 {
          width: 50%;
        }
        &.width-55 {
          width: 55%;
        }
      }
    }
  }
`;

export default AboutPagesSectionSix;
