import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const AboutPagesSectionFour = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutPagesSectionFourStyled>
      <div className='container'>
        <div className='title text-center display-small'>
          Our General Work Scheme
        </div>
        <div className='step-container'>
          <div className='step-item' data-aos='fade-right'>
            <div className='step-number paragraph-medium'>Step 1</div>
            <div className='step-title paragraph-large'>
              Requirement Gathering
            </div>
            <div className='step-desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </div>
          </div>
          <div className='arrow' data-aos='fade-right' data-aos-delay='100'>
            <svg
              width='27'
              height='23'
              viewBox='0 0 27 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 11.7422C1.78395 11.6956 3.58788 11.5929 4.53194 11.5547M25.7145 11.2885C25.7145 11.2885 24.5046 10.5197 16.7791 11.0182L25.7145 11.2885ZM25.7145 11.2885C23.5093 12.6206 21.1851 13.6688 18.939 14.9118L25.7145 11.2885ZM25.7145 11.2885C23.6653 10.1391 21.7671 8.75535 19.9051 7.3262L25.7145 11.2885ZM12.3912 11.1536C11.3688 11.1487 10.243 11.162 9.16551 11.2686L12.3912 11.1536Z'
                stroke='#102B55'
                strokeWidth='2'
                strokeMiterlimit='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>

          <div className='step-item' data-aos='fade-right' data-aos-delay='200'>
            <div className='step-number paragraph-medium'>Step 2</div>
            <div className='step-title paragraph-large'>Problem Analysis</div>
            <div className='step-desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </div>
          </div>
          <div className='arrow' data-aos='fade-right' data-aos-delay='300'>
            <svg
              width='27'
              height='23'
              viewBox='0 0 27 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 11.7422C1.78395 11.6956 3.58788 11.5929 4.53194 11.5547M25.7145 11.2885C25.7145 11.2885 24.5046 10.5197 16.7791 11.0182L25.7145 11.2885ZM25.7145 11.2885C23.5093 12.6206 21.1851 13.6688 18.939 14.9118L25.7145 11.2885ZM25.7145 11.2885C23.6653 10.1391 21.7671 8.75535 19.9051 7.3262L25.7145 11.2885ZM12.3912 11.1536C11.3688 11.1487 10.243 11.162 9.16551 11.2686L12.3912 11.1536Z'
                stroke='#102B55'
                strokeWidth='2'
                strokeMiterlimit='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='step-item' data-aos='fade-right' data-aos-delay='400'>
            <div className='step-number paragraph-medium'>Step 3</div>
            <div className='step-title paragraph-large'>Planning</div>
            <div className='step-desc paragraph-medium regular'>
              <div className='ul'>
                <div className='ul-item'>
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
                    Flow System
                  </div>
                </div>
                <div className='ul-item'>
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
                    Wireframing
                  </div>
                </div>
                <div className='ul-item'>
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
                    Arsitektur Sistem
                  </div>
                </div>
                <div className='ul-item'>
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
                    Dev. Technology
                  </div>
                </div>
                <div className='ul-item'>
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
                    Prototyping
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='arrow' data-aos='fade-right' data-aos-delay='500'>
            <svg
              width='27'
              height='23'
              viewBox='0 0 27 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 11.7422C1.78395 11.6956 3.58788 11.5929 4.53194 11.5547M25.7145 11.2885C25.7145 11.2885 24.5046 10.5197 16.7791 11.0182L25.7145 11.2885ZM25.7145 11.2885C23.5093 12.6206 21.1851 13.6688 18.939 14.9118L25.7145 11.2885ZM25.7145 11.2885C23.6653 10.1391 21.7671 8.75535 19.9051 7.3262L25.7145 11.2885ZM12.3912 11.1536C11.3688 11.1487 10.243 11.162 9.16551 11.2686L12.3912 11.1536Z'
                stroke='#102B55'
                strokeWidth='2'
                strokeMiterlimit='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='step-item' data-aos='fade-right' data-aos-delay='600'>
            <div className='step-number paragraph-medium'>Step 2</div>
            <div className='step-title paragraph-large'>Developing</div>
            <div className='step-desc paragraph-medium regular'>
              <div className='ul'>
                <div className='ul-item'>
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
                    Sprint Plan
                  </div>
                </div>
                <div className='ul-item'>
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
                    Implementasi
                  </div>
                </div>
                <div className='ul-item'>
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
                    Usability Testing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutPagesSectionFourStyled>
  );
};

const AboutPagesSectionFourStyled = styled.div`
  padding: 80px 0px;
  background: var(--hxvr-neutral-40);
  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .step-container {
      display: flex;
      align-items: stretch;
      width: 100%;
      gap: 5px;
      .step-item {
        width: 25%;
        padding: 24px 24px;
        background: var(--hxvr-neutral-30);
        box-shadow: 0px 12px 24px -4px rgba(59, 65, 69, 0.08),
          0px 0px 12px -4px rgba(59, 65, 69, 0.08);
        .step-number {
          text-transform: uppercase;
          color: var(--primary-base);
          margin-bottom: 24px;
        }
        .step-title {
          color: var(--hxvr-neutral-100);
          margin-bottom: 8px;
        }

        .step-desc {
          color: var(--hxvr-neutral-secondary);
          .ul {
            display: flex;
            flex-direction: column;
            gap: 8px;
            .ul-item {
              display: flex;
              align-items: center;
              gap: 12px;
              .li-text {
                color: var(--hxvr-neutral-100);
              }
            }
          }
        }
      }
    }
    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .container {
      .step-container {
        flex-direction: column;
        .arrow > svg {
          transform: rotate(90deg);
        }

        .step-item {
          width: 100%;
        }
      }
    }
  }
`;

export default AboutPagesSectionFour;
