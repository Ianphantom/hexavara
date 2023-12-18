import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const AboutPagesSectionTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutPagesSectionTwoStyled data-aos='fade-up' data-aos-duration='1500'>
      <div className='container'>
        <div className='title display-medium'>
          "The best idea is comprehensive solution"
        </div>
        <div className='bottom-container'>
          <div className='desc paragraph-large regular'>
            Technology is an Art and Software is a Creation. Our satisfaction
            depends on how many problem we are able to solve and how many client
            successfully accelerate their business.
            <br />
            We dedicated our life to all in for those since 2013
          </div>
          <div className='image-container'>
            <img
              data-aos='zoom-in'
              data-aos-duration='1500'
              data-aos-delay='750'
              src='https://blog.slido.com/wp-content/uploads/2022/09/slido-blog-cover-1600x1066px-1.jpg'
              alt='culture'
            />
          </div>
        </div>
      </div>
    </AboutPagesSectionTwoStyled>
  );
};

const AboutPagesSectionTwoStyled = styled.div`
  padding: 80px 0px;
  background: var(--primary-base);
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    .title {
      color: var(--hxvr-neutral-30);
    }
    .bottom-container {
      display: flex;
      gap: 72px;
      .desc {
        width: 50%;
        color: var(--hxvr-neutral-30);
      }
      .image-container {
        width: 50%;
        height: 270px;
        position: relatives;
        img {
          position: absolute;
          border-radius: 24px 0px 0px 0px;
          right: 0;
          height: 350px;
          width: 50%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .bottom-container {
      width: 100%;
      flex-direction: column;
      gap: 26px;
      .desc {
        width: 100% !important;
      }
      .image-container {
        width: 100%;
        height: 160px !important;
        img {
          height: 240px !important;
          width: 90% !important;
        }
      }
    }
  }
`;

export default AboutPagesSectionTwo;
