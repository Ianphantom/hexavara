import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styled from "styled-components";

const ServicePagesSectionThree = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ServicePagesSectionThreeStyled>
      <div className='container'>
        <div className='title heading-large text-center'>Our Service</div>
        <div className='services-container'>
          <div className='service-container pointer'>
            <div className='top'>
              <div className='title heading-large'>Software Development</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </div>
              <div className='other'>
                <u>See related project </u>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.0479 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.045C12.4927 5.83365 12.374 5.54701 12.374 5.24812C12.374 4.94924 12.4927 4.66259 12.7041 4.45125C12.9154 4.2399 13.2021 4.12117 13.5009 4.12117C13.7998 4.12117 14.0865 4.2399 14.2978 4.45125L21.0478 11.2012C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2938 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z'
                    fill='#FDFDFD'
                  />
                </svg>
              </div>
            </div>
            <div className='bottom'>
              <img
                src='https://3back.com/app/uploads/2017/07/Team-scaled.jpg'
                alt='service-preview'
              />
            </div>
          </div>
          <div className='service-container pointer'>
            <div className='top'>
              <div className='title heading-large'>Software Development</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </div>
              <div className='other'>
                <u>See related project </u>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.0479 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.045C12.4927 5.83365 12.374 5.54701 12.374 5.24812C12.374 4.94924 12.4927 4.66259 12.7041 4.45125C12.9154 4.2399 13.2021 4.12117 13.5009 4.12117C13.7998 4.12117 14.0865 4.2399 14.2978 4.45125L21.0478 11.2012C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2938 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z'
                    fill='#FDFDFD'
                  />
                </svg>
              </div>
            </div>
            <div className='bottom'>
              <img
                src='https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg'
                alt='service-preview'
              />
            </div>
          </div>
          <div className='service-container pointer'>
            <div className='top'>
              <div className='title heading-large'>Software Development</div>
              <div className='desc paragraph-medium regular'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </div>
              <div className='other'>
                <u>See related project </u>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.0479 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.045C12.4927 5.83365 12.374 5.54701 12.374 5.24812C12.374 4.94924 12.4927 4.66259 12.7041 4.45125C12.9154 4.2399 13.2021 4.12117 13.5009 4.12117C13.7998 4.12117 14.0865 4.2399 14.2978 4.45125L21.0478 11.2012C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2938 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z'
                    fill='#FDFDFD'
                  />
                </svg>
              </div>
            </div>
            <div className='bottom'>
              <img
                src='https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A'
                alt='service-preview'
              />
            </div>
          </div>
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
          img {
            width: 100%;
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
