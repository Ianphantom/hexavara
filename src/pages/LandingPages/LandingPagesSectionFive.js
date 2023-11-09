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
              animi consectetur
              <div className='ul'>
                {[
                  "Web Development",
                  "Mobile Apps Development",
                  "Geographical Information System",
                  "Internet of Things",
                  "Enterprise Resource Planning",
                  "Accounting Software",
                ].map((item, index) => (
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
          <div
            className='service-container'
            data-aos='fade-right'
            data-aos-duration='300'
            data-aos-delay='300'
          >
            <div className='icon'>
              <svg
                width='57'
                height='56'
                viewBox='0 0 57 56'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect x='0.5' width='56' height='56' rx='8' fill='#3182FF' />
                <path
                  d='M23.6129 26.4556C23.6677 26.3184 23.749 26.1933 23.8522 26.0875C23.9553 25.9817 24.0784 25.8973 24.2142 25.839C24.35 25.7808 24.4959 25.7499 24.6437 25.7481C24.7915 25.7462 24.9381 25.7735 25.0754 25.8284L27.2822 26.7116V24.6228C27.2822 24.3244 27.4008 24.0383 27.6117 23.8273C27.8227 23.6163 28.1089 23.4978 28.4072 23.4978C28.7056 23.4978 28.9917 23.6163 29.2027 23.8273C29.4137 24.0383 29.5322 24.3244 29.5322 24.6228V26.7116L31.7391 25.8284C32.0155 25.7203 32.3235 25.7257 32.5959 25.8436C32.8684 25.9615 33.0831 26.1824 33.1935 26.4579C33.3038 26.7335 33.3007 27.0415 33.185 27.3149C33.0692 27.5882 32.8501 27.8047 32.5754 27.9172L30.1885 28.8725L31.5572 30.6978C31.6459 30.816 31.7104 30.9505 31.747 31.0936C31.7837 31.2367 31.7918 31.3856 31.7709 31.5319C31.75 31.6782 31.7005 31.8189 31.6253 31.946C31.55 32.0731 31.4504 32.1842 31.3322 32.2728C31.214 32.3614 31.0795 32.4259 30.9364 32.4626C30.7933 32.4993 30.6444 32.5074 30.4981 32.4865C30.3519 32.4656 30.2112 32.4161 30.084 32.3408C29.9569 32.2656 29.8459 32.166 29.7572 32.0478L28.4072 30.2478L27.0572 32.0478C26.9686 32.166 26.8575 32.2656 26.7304 32.3408C26.6033 32.4161 26.4626 32.4656 26.3163 32.4865C26.1701 32.5074 26.0211 32.4993 25.878 32.4626C25.7349 32.4259 25.6004 32.3614 25.4822 32.2728C25.364 32.1842 25.2645 32.0731 25.1892 31.946C25.1139 31.8189 25.0644 31.6782 25.0435 31.5319C25.0226 31.3856 25.0308 31.2367 25.0674 31.0936C25.1041 30.9505 25.1686 30.816 25.2572 30.6978L26.626 28.8725L24.2391 27.9172C23.9624 27.8063 23.7409 27.59 23.6235 27.316C23.5061 27.0419 23.5023 26.7325 23.6129 26.4556ZM37.7822 20.8728V26.3853C37.7822 35.0441 30.4604 37.9166 28.9922 38.4022C28.6123 38.5297 28.2012 38.5297 27.8213 38.4022C26.3541 37.9147 19.0322 35.0441 19.0322 26.3853V20.8728C19.0322 20.3755 19.2298 19.8986 19.5814 19.547C19.933 19.1953 20.4099 18.9978 20.9072 18.9978H35.9072C36.4045 18.9978 36.8814 19.1953 37.2331 19.547C37.5847 19.8986 37.7822 20.3755 37.7822 20.8728ZM35.5322 21.2478H21.2822V26.3853C21.2822 33.2816 26.9569 35.7162 28.4072 36.2291C29.8585 35.72 35.5322 33.2853 35.5322 26.39V21.2478Z'
                  fill='#FDFDFD'
                />
              </svg>
            </div>
            <div className='title heading-small'>IT Security</div>
            <div className='desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
              <div className='ul'>
                {[
                  "Network Security",
                  "Internet Security",
                  "Endpoint Security",
                  "Cloud Security",
                ].map((item, index) => (
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
          <div
            className='service-container'
            data-aos='fade-right'
            data-aos-duration='300'
            data-aos-delay='600'
          >
            <div className='icon'>
              <svg
                width='57'
                height='56'
                viewBox='0 0 57 56'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect x='0.5' width='56' height='56' rx='8' fill='#3182FF' />
                <path
                  d='M36.6562 18.9978H20.1562C19.659 18.9978 19.1821 19.1953 18.8304 19.547C18.4788 19.8986 18.2812 20.3755 18.2812 20.8728V35.8728C18.2813 36.0646 18.3303 36.2532 18.4237 36.4207C18.5172 36.5882 18.6518 36.729 18.815 36.8298C18.9782 36.9306 19.1644 36.988 19.356 36.9965C19.5476 37.0051 19.7382 36.9646 19.9097 36.8787L22.4062 35.6309L24.9028 36.8787C25.0591 36.957 25.2315 36.9977 25.4062 36.9977C25.581 36.9977 25.7534 36.957 25.9097 36.8787L28.4062 35.6309L30.9028 36.8787C31.0591 36.957 31.2315 36.9977 31.4062 36.9977C31.581 36.9977 31.7534 36.957 31.9097 36.8787L34.4062 35.6309L36.9028 36.8787C37.0743 36.9646 37.2649 37.0051 37.4565 36.9965C37.6481 36.988 37.8343 36.9306 37.9975 36.8298C38.1607 36.729 38.2953 36.5882 38.3888 36.4207C38.4822 36.2532 38.5312 36.0646 38.5312 35.8728V20.8728C38.5312 20.3755 38.3337 19.8986 37.9821 19.547C37.6304 19.1953 37.1535 18.9978 36.6562 18.9978ZM36.2812 34.0522L34.9097 33.3669C34.7534 33.2887 34.581 33.2479 34.4062 33.2479C34.2315 33.2479 34.0591 33.2887 33.9028 33.3669L31.4062 34.6147L28.9097 33.3669C28.7534 33.2887 28.581 33.2479 28.4062 33.2479C28.2315 33.2479 28.0591 33.2887 27.9028 33.3669L25.4062 34.6147L22.9097 33.3669C22.7534 33.2887 22.581 33.2479 22.4062 33.2479C22.2315 33.2479 22.0591 33.2887 21.9028 33.3669L20.5312 34.0522V21.2478H36.2812V34.0522ZM29.1562 25.7478C29.1562 25.4494 29.2748 25.1633 29.4858 24.9523C29.6967 24.7413 29.9829 24.6228 30.2812 24.6228H33.6562C33.9546 24.6228 34.2408 24.7413 34.4517 24.9523C34.6627 25.1633 34.7812 25.4494 34.7812 25.7478C34.7812 26.0462 34.6627 26.3323 34.4517 26.5433C34.2408 26.7543 33.9546 26.8728 33.6562 26.8728H30.2812C29.9829 26.8728 29.6967 26.7543 29.4858 26.5433C29.2748 26.3323 29.1562 26.0462 29.1562 25.7478ZM29.1562 29.4978C29.1562 29.1994 29.2748 28.9133 29.4858 28.7023C29.6967 28.4913 29.9829 28.3728 30.2812 28.3728H33.6562C33.9546 28.3728 34.2408 28.4913 34.4517 28.7023C34.6627 28.9133 34.7812 29.1994 34.7812 29.4978C34.7812 29.7962 34.6627 30.0823 34.4517 30.2933C34.2408 30.5043 33.9546 30.6228 33.6562 30.6228H30.2812C29.9829 30.6228 29.6967 30.5043 29.4858 30.2933C29.2748 30.0823 29.1562 29.7962 29.1562 29.4978ZM23.1562 31.7478H26.9062C27.2046 31.7478 27.4908 31.6293 27.7017 31.4183C27.9127 31.2073 28.0312 30.9212 28.0312 30.6228V24.6228C28.0312 24.3244 27.9127 24.0383 27.7017 23.8273C27.4908 23.6163 27.2046 23.4978 26.9062 23.4978H23.1562C22.8579 23.4978 22.5717 23.6163 22.3608 23.8273C22.1498 24.0383 22.0312 24.3244 22.0312 24.6228V30.6228C22.0312 30.9212 22.1498 31.2073 22.3608 31.4183C22.5717 31.6293 22.8579 31.7478 23.1562 31.7478ZM24.2812 25.7478H25.7812V29.4978H24.2812V25.7478Z'
                  fill='#FDFDFD'
                />
              </svg>
            </div>
            <div className='title heading-small'>Media and Advertising</div>
            <div className='desc paragraph-medium regular'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
              <div className='ul'>
                {[
                  "Advertising, Digital Marketing",
                  "Aerial Photography Videography",
                  "Videography",
                  "Branding",
                  "Motion Graphic",
                  "Graphic Design",
                  "3D Assets",
                ].map((item, index) => (
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
        </div>
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
