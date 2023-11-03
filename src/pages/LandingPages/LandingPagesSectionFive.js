import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            aliquid eligendi, repellendus sit inventore ducimus laboriosam in
            consectetur provident enim.
          </div>
        </div>
        <div className='services-container'>
          <div
            className='service-container'
            data-aos='fade-right'
            data-aos-duration='300'
          >
            <div className='icon'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.32893 8.7959L0.328934 5.7959C0.224054 5.69138 0.140838 5.56719 0.0840565 5.43044C0.0272755 5.2937 -0.00195312 5.14709 -0.00195312 4.99902C-0.00195312 4.85096 0.0272755 4.70435 0.0840565 4.5676C0.140838 4.43086 0.224054 4.30666 0.328934 4.20215L3.32893 1.20215C3.43358 1.0975 3.55781 1.01449 3.69454 0.957854C3.83127 0.90122 3.97782 0.87207 4.12581 0.87207C4.2738 0.87207 4.42035 0.90122 4.55707 0.957854C4.6938 1.01449 4.81804 1.0975 4.92268 1.20215C5.02733 1.30679 5.11034 1.43103 5.16698 1.56776C5.22361 1.70448 5.25276 1.85103 5.25276 1.99902C5.25276 2.14702 5.22361 2.29356 5.16698 2.43029C5.11034 2.56702 5.02733 2.69125 4.92268 2.7959L2.71862 4.99996L4.92081 7.20402C5.13215 7.41537 5.25089 7.70201 5.25089 8.0009C5.25089 8.29978 5.13215 8.58643 4.92081 8.79777C4.70946 9.00912 4.42282 9.12785 4.12393 9.12785C3.82505 9.12785 3.5384 9.00912 3.32706 8.79777L3.32893 8.7959ZM7.82893 8.7959C7.93345 8.90078 8.05764 8.98399 8.19439 9.04078C8.33113 9.09756 8.47774 9.12678 8.62581 9.12678C8.77387 9.12678 8.92048 9.09756 9.05723 9.04078C9.19397 8.98399 9.31817 8.90078 9.42268 8.7959L12.4227 5.7959C12.5276 5.69138 12.6108 5.56719 12.6676 5.43044C12.7243 5.2937 12.7536 5.14709 12.7536 4.99902C12.7536 4.85096 12.7243 4.70435 12.6676 4.5676C12.6108 4.43086 12.5276 4.30666 12.4227 4.20215L9.42268 1.20215C9.21134 0.990802 8.92469 0.87207 8.62581 0.87207C8.32692 0.87207 8.04028 0.990802 7.82893 1.20215C7.61759 1.41349 7.49886 1.70014 7.49886 1.99902C7.49886 2.29791 7.61759 2.58455 7.82893 2.7959L10.0311 4.99996L7.82893 7.20402C7.72434 7.3085 7.64136 7.43258 7.58474 7.56915C7.52813 7.70572 7.49899 7.85212 7.49899 7.99996C7.49899 8.1478 7.52813 8.29419 7.58474 8.43077C7.64136 8.56734 7.72434 8.69141 7.82893 8.7959ZM17.2499 2.37496H15.3749C15.0765 2.37496 14.7904 2.49349 14.5794 2.70446C14.3684 2.91544 14.2499 3.20159 14.2499 3.49996C14.2499 3.79833 14.3684 4.08448 14.5794 4.29545C14.7904 4.50643 15.0765 4.62496 15.3749 4.62496H16.8749V17.375H4.12487V12.125C4.12487 11.8266 4.00634 11.5404 3.79537 11.3295C3.58439 11.1185 3.29824 11 2.99987 11C2.7015 11 2.41535 11.1185 2.20438 11.3295C1.9934 11.5404 1.87487 11.8266 1.87487 12.125V17.75C1.87487 18.2472 2.07242 18.7242 2.42405 19.0758C2.77568 19.4274 3.25259 19.625 3.74987 19.625H17.2499C17.7472 19.625 18.2241 19.4274 18.5757 19.0758C18.9273 18.7242 19.1249 18.2472 19.1249 17.75V4.24996C19.1249 3.75268 18.9273 3.27577 18.5757 2.92413C18.2241 2.5725 17.7472 2.37496 17.2499 2.37496Z'
                  fill='#FDFDFD'
                />
              </svg>
            </div>
            <div className='title heading-small'>Software Development</div>
            <div className='desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              animi consectetur eaque adipisci molestias dolorum.
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
          <div
            className='service-container'
            data-aos='fade-right'
            data-aos-duration='300'
            data-aos-delay='300'
          >
            <div className='icon'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.32893 8.7959L0.328934 5.7959C0.224054 5.69138 0.140838 5.56719 0.0840565 5.43044C0.0272755 5.2937 -0.00195312 5.14709 -0.00195312 4.99902C-0.00195312 4.85096 0.0272755 4.70435 0.0840565 4.5676C0.140838 4.43086 0.224054 4.30666 0.328934 4.20215L3.32893 1.20215C3.43358 1.0975 3.55781 1.01449 3.69454 0.957854C3.83127 0.90122 3.97782 0.87207 4.12581 0.87207C4.2738 0.87207 4.42035 0.90122 4.55707 0.957854C4.6938 1.01449 4.81804 1.0975 4.92268 1.20215C5.02733 1.30679 5.11034 1.43103 5.16698 1.56776C5.22361 1.70448 5.25276 1.85103 5.25276 1.99902C5.25276 2.14702 5.22361 2.29356 5.16698 2.43029C5.11034 2.56702 5.02733 2.69125 4.92268 2.7959L2.71862 4.99996L4.92081 7.20402C5.13215 7.41537 5.25089 7.70201 5.25089 8.0009C5.25089 8.29978 5.13215 8.58643 4.92081 8.79777C4.70946 9.00912 4.42282 9.12785 4.12393 9.12785C3.82505 9.12785 3.5384 9.00912 3.32706 8.79777L3.32893 8.7959ZM7.82893 8.7959C7.93345 8.90078 8.05764 8.98399 8.19439 9.04078C8.33113 9.09756 8.47774 9.12678 8.62581 9.12678C8.77387 9.12678 8.92048 9.09756 9.05723 9.04078C9.19397 8.98399 9.31817 8.90078 9.42268 8.7959L12.4227 5.7959C12.5276 5.69138 12.6108 5.56719 12.6676 5.43044C12.7243 5.2937 12.7536 5.14709 12.7536 4.99902C12.7536 4.85096 12.7243 4.70435 12.6676 4.5676C12.6108 4.43086 12.5276 4.30666 12.4227 4.20215L9.42268 1.20215C9.21134 0.990802 8.92469 0.87207 8.62581 0.87207C8.32692 0.87207 8.04028 0.990802 7.82893 1.20215C7.61759 1.41349 7.49886 1.70014 7.49886 1.99902C7.49886 2.29791 7.61759 2.58455 7.82893 2.7959L10.0311 4.99996L7.82893 7.20402C7.72434 7.3085 7.64136 7.43258 7.58474 7.56915C7.52813 7.70572 7.49899 7.85212 7.49899 7.99996C7.49899 8.1478 7.52813 8.29419 7.58474 8.43077C7.64136 8.56734 7.72434 8.69141 7.82893 8.7959ZM17.2499 2.37496H15.3749C15.0765 2.37496 14.7904 2.49349 14.5794 2.70446C14.3684 2.91544 14.2499 3.20159 14.2499 3.49996C14.2499 3.79833 14.3684 4.08448 14.5794 4.29545C14.7904 4.50643 15.0765 4.62496 15.3749 4.62496H16.8749V17.375H4.12487V12.125C4.12487 11.8266 4.00634 11.5404 3.79537 11.3295C3.58439 11.1185 3.29824 11 2.99987 11C2.7015 11 2.41535 11.1185 2.20438 11.3295C1.9934 11.5404 1.87487 11.8266 1.87487 12.125V17.75C1.87487 18.2472 2.07242 18.7242 2.42405 19.0758C2.77568 19.4274 3.25259 19.625 3.74987 19.625H17.2499C17.7472 19.625 18.2241 19.4274 18.5757 19.0758C18.9273 18.7242 19.1249 18.2472 19.1249 17.75V4.24996C19.1249 3.75268 18.9273 3.27577 18.5757 2.92413C18.2241 2.5725 17.7472 2.37496 17.2499 2.37496Z'
                  fill='#FDFDFD'
                />
              </svg>
            </div>
            <div className='title heading-small'>Software Development</div>
            <div className='desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              animi consectetur eaque adipisci molestias dolorum.
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
          <div
            className='service-container'
            data-aos='fade-right'
            data-aos-duration='300'
            data-aos-delay='600'
          >
            <div className='icon'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.32893 8.7959L0.328934 5.7959C0.224054 5.69138 0.140838 5.56719 0.0840565 5.43044C0.0272755 5.2937 -0.00195312 5.14709 -0.00195312 4.99902C-0.00195312 4.85096 0.0272755 4.70435 0.0840565 4.5676C0.140838 4.43086 0.224054 4.30666 0.328934 4.20215L3.32893 1.20215C3.43358 1.0975 3.55781 1.01449 3.69454 0.957854C3.83127 0.90122 3.97782 0.87207 4.12581 0.87207C4.2738 0.87207 4.42035 0.90122 4.55707 0.957854C4.6938 1.01449 4.81804 1.0975 4.92268 1.20215C5.02733 1.30679 5.11034 1.43103 5.16698 1.56776C5.22361 1.70448 5.25276 1.85103 5.25276 1.99902C5.25276 2.14702 5.22361 2.29356 5.16698 2.43029C5.11034 2.56702 5.02733 2.69125 4.92268 2.7959L2.71862 4.99996L4.92081 7.20402C5.13215 7.41537 5.25089 7.70201 5.25089 8.0009C5.25089 8.29978 5.13215 8.58643 4.92081 8.79777C4.70946 9.00912 4.42282 9.12785 4.12393 9.12785C3.82505 9.12785 3.5384 9.00912 3.32706 8.79777L3.32893 8.7959ZM7.82893 8.7959C7.93345 8.90078 8.05764 8.98399 8.19439 9.04078C8.33113 9.09756 8.47774 9.12678 8.62581 9.12678C8.77387 9.12678 8.92048 9.09756 9.05723 9.04078C9.19397 8.98399 9.31817 8.90078 9.42268 8.7959L12.4227 5.7959C12.5276 5.69138 12.6108 5.56719 12.6676 5.43044C12.7243 5.2937 12.7536 5.14709 12.7536 4.99902C12.7536 4.85096 12.7243 4.70435 12.6676 4.5676C12.6108 4.43086 12.5276 4.30666 12.4227 4.20215L9.42268 1.20215C9.21134 0.990802 8.92469 0.87207 8.62581 0.87207C8.32692 0.87207 8.04028 0.990802 7.82893 1.20215C7.61759 1.41349 7.49886 1.70014 7.49886 1.99902C7.49886 2.29791 7.61759 2.58455 7.82893 2.7959L10.0311 4.99996L7.82893 7.20402C7.72434 7.3085 7.64136 7.43258 7.58474 7.56915C7.52813 7.70572 7.49899 7.85212 7.49899 7.99996C7.49899 8.1478 7.52813 8.29419 7.58474 8.43077C7.64136 8.56734 7.72434 8.69141 7.82893 8.7959ZM17.2499 2.37496H15.3749C15.0765 2.37496 14.7904 2.49349 14.5794 2.70446C14.3684 2.91544 14.2499 3.20159 14.2499 3.49996C14.2499 3.79833 14.3684 4.08448 14.5794 4.29545C14.7904 4.50643 15.0765 4.62496 15.3749 4.62496H16.8749V17.375H4.12487V12.125C4.12487 11.8266 4.00634 11.5404 3.79537 11.3295C3.58439 11.1185 3.29824 11 2.99987 11C2.7015 11 2.41535 11.1185 2.20438 11.3295C1.9934 11.5404 1.87487 11.8266 1.87487 12.125V17.75C1.87487 18.2472 2.07242 18.7242 2.42405 19.0758C2.77568 19.4274 3.25259 19.625 3.74987 19.625H17.2499C17.7472 19.625 18.2241 19.4274 18.5757 19.0758C18.9273 18.7242 19.1249 18.2472 19.1249 17.75V4.24996C19.1249 3.75268 18.9273 3.27577 18.5757 2.92413C18.2241 2.5725 17.7472 2.37496 17.2499 2.37496Z'
                  fill='#FDFDFD'
                />
              </svg>
            </div>
            <div className='title heading-small'>Software Development</div>
            <div className='desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              animi consectetur eaque adipisci molestias dolorum.
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
        <div className='more'>
          <div className='paragraph-medium'>Learn More</div>
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
      align-items: stretch;
      gap: 32px;
      .service-container {
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
