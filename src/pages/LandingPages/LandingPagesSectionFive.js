import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { dataServiceLandingPage } from "../../data/data-services-landing-page";

const LandingPagesSectionFive = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LandingPagesSectionFiveStyled>
      <div className='container'>
        <div className='service-title'>
          <div className='title display-medium'>Services</div>
          <div className='desc paragraph-medium regular'>
            We provide exclusive services in solving your business problems
          </div>
        </div>
        <div className='services-container'>
          {dataServiceLandingPage.map((item, index) => (
            <div className='service-container pointer' key={index}>
              <div className='top'>
                <div className='title heading-small'>{item.name}</div>
                <div className='desc paragraph-small regular'>
                  {item.description}
                </div>
              </div>
              <div className='bottom'>
                <img src={item.images} alt='service-preview' />
              </div>
            </div>
          ))}
        </div>
        <Link to='/services'>
          <div className='more'>
            <div className='paragraph-medium'>See More</div>
            <svg
              width='20'
              height='16'
              viewBox='0 0 20 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.0459 8.79598L12.2959 15.546C12.0846 15.7573 11.7979 15.8761 11.4991 15.8761C11.2002 15.8761 10.9135 15.7573 10.7022 15.546C10.4908 15.3346 10.3721 15.048 10.3721 14.7491C10.3721 14.4502 10.4908 14.1636 10.7022 13.9522L15.5312 9.12504H1.75C1.45163 9.12504 1.16548 9.00652 0.954505 8.79554C0.743526 8.58456 0.625 8.29841 0.625 8.00004C0.625 7.70167 0.743526 7.41552 0.954505 7.20455C1.16548 6.99357 1.45163 6.87504 1.75 6.87504H15.5312L10.7041 2.04504C10.4927 1.8337 10.374 1.54705 10.374 1.24817C10.374 0.949281 10.4927 0.662636 10.7041 0.451292C10.9154 0.239948 11.2021 0.121216 11.5009 0.121216C11.7998 0.121216 12.0865 0.239948 12.2978 0.451292L19.0478 7.20129C19.1527 7.30595 19.2359 7.4303 19.2926 7.5672C19.3493 7.7041 19.3784 7.85085 19.3782 7.99903C19.3781 8.1472 19.3486 8.29389 19.2916 8.43065C19.2346 8.56742 19.1511 8.69157 19.0459 8.79598Z'
                fill='#3182FF'
              />
            </svg>
          </div>
        </Link>
      </div>
    </LandingPagesSectionFiveStyled>
  );
};

const LandingPagesSectionFiveStyled = styled.div`
  padding: 80px 0px;
  background-color: #f6f6f6;
  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .service-title {
      .title {
        color: var(--hxvr-neutral-100);
        margin-bottom: 12px;
      }
      .desc {
        color: var(--hxvr-neutral-secondary);
      }
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
        border: 1px solid var(--hxvr-neutral-60);
        color: var(--hxvr-neutral-secondary);
        .top {
          padding: 40px 24px 24px 24px;
          .title {
            color: var(--hxvr-neutral-100);
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

    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: var(--primary-base);
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    .services-container {
      flex-direction: column;
    }
  }
`;

export default LandingPagesSectionFive;
