import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styled from "styled-components";

import { dataServiceLandingPage } from "../../data/data-services-landing-page";

const ServicePagesSectionThree = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ServicePagesSectionThreeStyled>
      <div className='container'>
        <div className='title heading-large text-center'>Our Services</div>
        <div className='services-container'>
          {dataServiceLandingPage.map((item) => (
            <div className='service-container pointer'>
              <div className='top'>
                <div className='title heading-small'>{item.name}</div>
                <div className='desc paragraph-small regular'>{item.description}</div>
              </div>
              <div className='bottom'>
                <img
                  src={item.images}
                  alt='service-preview'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServicePagesSectionThreeStyled>
  );
};

const ServicePagesSectionThreeStyled = styled.div`
  padding: 80px 0px;
  background: var(--primary-base);
  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    .title {
      color: var(--primary-10);
    }

    .services-container {
      display: flex;
      gap: 32px;
      align-items: stretch;
      .service-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 12px;
        border: 1px solid var(--hxvr-neutral-30);
        color: var(--hxvr-neutral-30);
        .top {
          padding: 40px 24px 24px 24px;
          .title {
            margin-bottom: 8px;
          }
          .desc {
            margin-bottom: 24px;
          }
        }
        .bottom {
          width: 100%;
          img {
            min-width: 100%;
            border-radius: 0px 0px 12px 12px;
            height: 196px;
            object-fit: cover;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .services-container {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    .services-container {
      flex-direction: column;
    }
  }
`;

export default ServicePagesSectionThree;
