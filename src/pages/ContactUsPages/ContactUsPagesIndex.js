import React, { useState } from "react";
import styled from "styled-components";

import WorkPagesTagButtonComponent from "../WorkPages/WorkPagesTagButtonComponent";
import ButtonComponent from "../../components/ButtonComponent";

const dataCategory = [
  "Web Development",
  "Mobile Apps Development",
  "GIS",
  "Internet of Things",
  "ERP",
  "Accounting Software",
  "Network Security",
  "Endpoint Security",
  "Cloud Security",
  "Advertising",
  "Digital Marketing",
  "Aerial Photography Videography",
  "Videography",
  "Branding",
  "Motion Graphic",
  "Graphic Design",
  "3D Asssets",
];

const dataBudget = [
  "< 500K>",
  "1000K - 5000K",
  "5000K - 10.000K",
  "10.000K - 20.000K",
  "> 20.000K",
];

const ContactUsPagesIndex = () => {
  const [fileIsChoosen, setFileIssChoosen] = useState("");

  const showTheFileUploaded = (event) => {
    console.log(event.target.files[0]);
    setFileIssChoosen(event.target.files[0].name);
  };
  const [tagActive, setTagActive] = useState("All");
  return (
    <ContactUsPagesIndexStyled>
      <div className='container'>
        <div className='section-one'>
          <div className='title'>
            Start a project and grow your bussiness with techonology.
          </div>
          <div className='desc-container'>
            <div className='desc'>
              By fill in the form below or you could{" "}
              <u className='pointer'>send us an email.</u>
            </div>
            <div className='desc'>
              If you prefer to get more quick response and conversation, hit us
              up on <u className='pointer'>whatsapp!</u>
            </div>
          </div>
        </div>
        <div className='section-two'>
          <div className='title heading-large'>Let us know about you</div>
          <div className='inputs-container'>
            <div className='left input-container'>
              <div className='text-form-container'>
                <div className='title paragraph-large'>Name</div>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='paragraph-medium regular'
                  placeholder='Input your name'
                />
              </div>
              <div className='text-form-container'>
                <div className='title paragraph-large'>Phone Number</div>
                <input
                  type='tel'
                  name='tel'
                  id='tel'
                  className='paragraph-medium regular'
                  placeholder='Input your number'
                />
              </div>
            </div>
            <div className='right input-container'>
              <div className='text-form-container'>
                <div className='title paragraph-large'>Email</div>
                <input
                  type='mail'
                  name='mail'
                  id='mail'
                  className='paragraph-medium regular'
                  placeholder='Input your email'
                />
              </div>
              <div className='text-form-container'>
                <div className='title paragraph-large'>Your Company</div>
                <input
                  type='text'
                  name='company'
                  id='company'
                  className='paragraph-medium regular'
                  placeholder='Input your company'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='section-three'>
          <div className='title heading-large'>Tell Us about your project</div>
          <textarea
            name='about project'
            className='paragraph-medium regular'
            defaultValue='Tell us more about the project you want to realize'
          />
          <div className='section-tag'>
            <div className='title heading-small'>Choose the category</div>
            <div className='category-container'>
              <WorkPagesTagButtonComponent
                text='All'
                tagActive={tagActive}
                setTagActive={setTagActive}
                theme='outlined-normal'
              />
              {dataCategory.map((item, index) => (
                <WorkPagesTagButtonComponent
                  key={index}
                  text={item}
                  tagActive={tagActive}
                  setTagActive={setTagActive}
                  theme='outlined-normal'
                />
              ))}
            </div>
          </div>
          <div className='section-tag'>
            <div className='title heading-small'>
              Budget (in IDR/Indonesian Rupiah)
            </div>
            <div className='category-container'>
              {dataBudget.map((item, index) => (
                <WorkPagesTagButtonComponent
                  key={index}
                  text={item}
                  tagActive={tagActive}
                  setTagActive={setTagActive}
                  theme='outlined-normal'
                />
              ))}
            </div>
          </div>
          <div className='section-tag'>
            <div className='title heading-small'>Upload Project Brief</div>
            <div className='category-container'>
              <label
                htmlFor='images'
                className='drop-container'
                id='dropcontainer'
              >
                <span className='drop-title'>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='40' height='40' rx='20' fill='#F3F3F3' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M13.8131 15.4812C14.6134 12.8218 17.0796 10.8849 20 10.8849C22.9204 10.8849 25.3866 12.8218 26.1869 15.4812C28.3826 16.0638 30 18.0637 30 20.4424C30 22.2231 29.0923 23.7913 27.7196 24.7102C27.1916 25.0636 26.4771 24.9221 26.1236 24.3941C25.7702 23.8661 25.9117 23.1516 26.4397 22.7981C27.2015 22.2882 27.6991 21.4232 27.6991 20.4424C27.6991 18.9683 26.5718 17.7561 25.1331 17.6228C24.6118 17.5745 24.1889 17.1805 24.104 16.6639C23.7796 14.6911 22.0645 13.1858 20 13.1858C17.9355 13.1858 16.2204 14.6911 15.896 16.6639C15.8111 17.1805 15.3882 17.5745 14.8669 17.6228C13.4282 17.7561 12.3009 18.9683 12.3009 20.4424C12.3009 21.4232 12.7985 22.2882 13.5603 22.7981C14.0883 23.1516 14.2298 23.8661 13.8764 24.3941C13.5229 24.9221 12.8084 25.0636 12.2804 24.7102C10.9077 23.7913 10 22.2231 10 20.4424C10 18.0637 11.6174 16.0638 13.8131 15.4812ZM18.8496 22.7774L17.2737 24.3533C16.8244 24.8025 16.096 24.8025 15.6467 24.3533C15.1974 23.904 15.1974 23.1756 15.6467 22.7263L19.1865 19.1865C19.6358 18.7372 20.3642 18.7372 20.8135 19.1865L24.3533 22.7263C24.8026 23.1756 24.8026 23.904 24.3533 24.3533C23.904 24.8025 23.1756 24.8025 22.7263 24.3533L21.1504 22.7774V27.9646C21.1504 28.5999 20.6354 29.115 20 29.115C19.3646 29.115 18.8496 28.5999 18.8496 27.9646V22.7774Z'
                      fill='#616161'
                    />
                  </svg>
                </span>
                {fileIsChoosen ? (
                  <div
                    className='paragraph-medium regular'
                    style={{ color: "var(--primary-base)" }}
                  >
                    {fileIsChoosen}
                  </div>
                ) : (
                  <>
                    <div
                      className='paragraph-medium regular'
                      style={{ color: "var(--primary-base)" }}
                    >
                      Click to Upload
                    </div>
                    <div className='paragraph-medium regular'>
                      SVG, PNG, JPG, GIF or PDF (max. 5MB)
                    </div>
                  </>
                )}

                <input
                  type='file'
                  id='images'
                  required
                  style={{ display: "none" }}
                  onChange={showTheFileUploaded}
                />
              </label>
            </div>
          </div>

          <div className='button-container'>
            <ButtonComponent
              text='Send Request!'
              className='button filled-primary border-radius-4 pointer paragraph-large'
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </ContactUsPagesIndexStyled>
  );
};

const ContactUsPagesIndexStyled = styled.div`
  .section-one {
    padding: 80px 0px 40px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .title {
      color: #333135;
      font-family: Outfit;
      font-size: 76px;
      font-style: normal;
      font-weight: 600;
      line-height: 101px; /* 132.895% */
    }

    .desc-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .desc {
        color: #616161;
        font-family: Outfit;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
      }
    }
  }
  .section-two {
    padding: 40px 0px;
    .inputs-container {
      margin-top: 32px;
      display: flex;
      align-items: center;
      gap: 48px;
      & > div {
        width: 50%;
      }
    }
    .input-container {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .title {
        margin-bottom: 12px;
      }
      input {
        padding: 8px 12px;
        width: 100%;
        border-radius: 8px;
        border: 1px solid #d9dbdb;
        background: #fcfcfc;
      }
    }
  }
  .section-three {
    display: flex;
    flex-direction: column;
    gap: 32px;
    textarea {
      padding: 8px 12px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid #d9dbdb;
      background: #fcfcfc;
      height: 160px;
    }
    .section-tag {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .category-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .drop-container {
      position: relative;
      display: flex;
      gap: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
      width: 100%;
      text-align: center;
      padding: 20px;
      border-radius: 10px;
      border: 2px dashed #555;
      color: #444;
      cursor: pointer;
      transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
    }

    .drop-container:hover {
      background: #eee;
      border-color: #111;
    }

    .drop-container:hover .drop-title {
      color: #222;
    }

    .drop-title {
      color: #444;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      transition: color 0.2s ease-in-out;
    }
    .button-container {
      width: max-content;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 768px) {
    .section-one {
      padding: 80px 0px 40px 0px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      .title {
        font-size: 58px;
      }
    }
    .inputs-container {
      flex-direction: column;
      & > div {
        width: 100% !important;
      }
    }
  }
`;

export default ContactUsPagesIndex;
