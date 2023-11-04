import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

// import assets
import arrowUpRight from "../../assets/svg/arrowUpRight.svg";

// import component
import TagComponent from "../../components/TagComponent";
import ButtonComponent from "../../components/ButtonComponent";

const LandingPagesSectionSeven = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LandingPagesSectionSevenStyled className="container">
      <div className="title-container">
        <div className="title display-medium">Our Latest Cool Projects</div>
      </div>
      <div className="projects-container">
        <div className="left">
          <div className="project-container pointer">
            <div className="image-container ">
              <img
                className="small-image"
                src="https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg"
                alt="project-preview"
              />
              <div className="overlay">
                <div className="read-more text paragraph-large">
                  <div className="paragraph-large mb-2">
                    SISTEM WAREHOUSE - MJA UNILEVER
                  </div>
                  <span>
                    Read more{" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.048 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.04501C12.4927 5.83367 12.374 5.54702 12.374 5.24814C12.374 4.94925 12.4927 4.66261 12.7041 4.45126C12.9154 4.23992 13.2021 4.12119 13.5009 4.12119C13.7998 4.12119 14.0865 4.23992 14.2978 4.45126L21.0478 11.2013C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2939 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <TagComponent text="Software Development" theme="primary" />
            <div className="title heading-small">
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className="desc paragraph-medium regular">
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
          <div className="project-container pointer">
            <div className="image-container ">
              <img
                className="normal-image"
                src="https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg"
                alt="project-preview"
              />
              <div className="overlay">
                <div className="read-more text paragraph-large">
                  <div className="paragraph-large mb-2">
                    SISTEM WAREHOUSE - MJA UNILEVER
                  </div>
                  <span>
                    Read more{" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.048 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.04501C12.4927 5.83367 12.374 5.54702 12.374 5.24814C12.374 4.94925 12.4927 4.66261 12.7041 4.45126C12.9154 4.23992 13.2021 4.12119 13.5009 4.12119C13.7998 4.12119 14.0865 4.23992 14.2978 4.45126L21.0478 11.2013C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2939 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <TagComponent text="Software Development" theme="primary" />
            <div className="title heading-small">
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className="desc paragraph-medium regular">
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
        </div>
        <div className="right">
          <div className="project-container pointer">
            <div className="image-container ">
              <img
                className="normal-image"
                src="https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg"
                alt="project-preview"
              />
              <div className="overlay">
                <div className="read-more text paragraph-large">
                  <div className="paragraph-large mb-2">
                    SISTEM WAREHOUSE - MJA UNILEVER
                  </div>
                  <span>
                    Read more{" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.048 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.04501C12.4927 5.83367 12.374 5.54702 12.374 5.24814C12.374 4.94925 12.4927 4.66261 12.7041 4.45126C12.9154 4.23992 13.2021 4.12119 13.5009 4.12119C13.7998 4.12119 14.0865 4.23992 14.2978 4.45126L21.0478 11.2013C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2939 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <TagComponent text="Software Development" theme="primary" />
            <div className="title heading-small">
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className="desc paragraph-medium regular">
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
          <div className="project-container pointer">
            <div className="image-container ">
              <img
                className="small-image"
                src="https://i.pinimg.com/474x/92/98/95/9298955af1347afdbbf7f00f31b1f336.jpg"
                alt="project-preview"
              />
              <div className="overlay">
                <div className="read-more text paragraph-large">
                  <div className="paragraph-large mb-2">
                    SISTEM WAREHOUSE - MJA UNILEVER
                  </div>
                  <span>
                    Read more{" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0459 12.7959L14.2959 19.5459C14.0846 19.7573 13.7979 19.876 13.4991 19.876C13.2002 19.876 12.9135 19.7573 12.7022 19.5459C12.4908 19.3346 12.3721 19.048 12.3721 18.7491C12.3721 18.4502 12.4908 18.1635 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.04501C12.4927 5.83367 12.374 5.54702 12.374 5.24814C12.374 4.94925 12.4927 4.66261 12.7041 4.45126C12.9154 4.23992 13.2021 4.12119 13.5009 4.12119C13.7998 4.12119 14.0865 4.23992 14.2978 4.45126L21.0478 11.2013C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2939 21.2916 12.4306C21.2346 12.5674 21.1511 12.6915 21.0459 12.7959Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <TagComponent text="Software Development" theme="primary" />
            <div className="title heading-small">
              SISTEM WAREHOUSE - MJA UNILEVER
            </div>
            <div className="desc paragraph-medium regular">
              Sistem yang mengakomodir kegiatan pendataan stok barang pada
              Perusahaan MJA sebagai distributor Unilever.
            </div>
          </div>
        </div>
      </div>
      <div className="all-project text-center">
        <ButtonComponent
          text="See All Projects"
          icon={arrowUpRight}
          className="button outlined-primary border-radius-4 pointer paragraph-large"
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
      &:hover {
        .image-container {
          .overlay {
            opacity: 0.7;
          }
        }
      }
      .image-container {
        margin-bottom: 32px;
        position: relative;
        &:hover {
          img {
            &.normal-image {
              height: 710px;
            }
            &.small-image {
              height: 512px;
            }
          }
        }
        img {
          transition: all ease 1.5s;
          border-radius: 12px;
          width: 100%;
          object-fit: cover;
          &.normal-image {
            height: 698px;
          }
          &.small-image {
            height: 500px;
          }
        }
        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background-color: #000000;
          border-radius: 12px;
        }
        .text {
          color: #b4b4b4;
          font-size: 18px;
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
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
