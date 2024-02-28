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
          {dataServiceLandingPage.map((itemService, index) => (
            <div
              className='service-container'
              data-aos='fade-right'
              data-aos-duration='300'
              key={index}
            >
              <div className='icon'>{itemService.icon}</div>
              <div className='title heading-small'>{itemService.name}</div>
              <div className='desc paragraph-medium regular'>
                {itemService.description}
                <div className='ul'>
                  {itemService.listServicesItem.map((item, index) => (
                    <div className='ul-item' key={index}>
                      <div className='li'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='8'
                          height='8'
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <circle cx='6' cy='6' r='6' fill='#616161' />
                        </svg>
                      </div>
                      <div className='li-text paragraph-medium regular'>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
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
      align-items: stretch;
      gap: 32px;
      .service-container {
        flex: 1 1 0px;
        padding: 32px 24px;
        border-radius: 8px;
        border: 1px solid var(--hxvr-neutral-50);
        background: #fdfdfd;
        .icon {
          width: 56px;
          height: 56px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--primary-base);
          border-radius: 8px;
          margin-bottom: 32px;
        }
        .title {
          color: var(--hxvr-neutral-100);
          margin-bottom: 8px;
        }
        .desc {
          color: var(--hxvr-neutral-secondary);
          .ul {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            .ul-item {
              display: flex;
              align-items: center;
              gap: 12px;
              .li-text {
                color: var(--hxvr-neutral-secondary);
              }
            }
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
