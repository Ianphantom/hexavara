import React from "react";
import styled from "styled-components";

// import images assets
import hexavaraLogoHeader from "../assets/images/hexavara_header.png";
import instagramSocialMedia from "../assets/svg/instagramSocialMedia.svg";
import linkedinSocialMedia from "../assets/svg/linkedinSocialMedia.svg";

const FooterComponent = () => {
  return (
    <FooterComponentStyled>
      <div className='container'>
        <div className='top-footer'>
          <div className='company-information'>
            <img src={hexavaraLogoHeader} alt='Hexavara Logo' />
          </div>
          <div className='addresses'>
            <div>
              <div className='company-name paragraph-large'>
                Hexavara Technology
              </div>
              <div className='contact-us paragraph-medium regular'>
                Contact us on <u>info@hexavara.com</u>, <u>+628113451550</u>
              </div>
            </div>
            {/* <div className='address address-one'>
              <div className='address-name paragraph-large'>Jakarta</div>
              <div className='address-location paragraph-medium regular'>
                Menara Duta Wing A Lantai 7, Jl. H. R. Rasuna Said Kuningan,
                South Jakarta City, Jakarta 12910
              </div>
            </div> */}
            <div className='address address-two'>
              <div className='address-name paragraph-large'>Surabaya</div>
              <div className='address-location paragraph-medium regular'>
                Graha Bukopin Lantai 7 dan 12, Jl. Panglima Sudirman No. 10-18,
                Embong Kaliasin, Genteng, Kota Surabaya, Jawa Timur 60271
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='bottom-footer'>
          <div className='copyright paragraph-medium regular'>
            ©2023 Hexavara Technology. All Rights Reserved.
          </div>
          <div className='social-media'>
            <a
              href='https://www.instagram.com/hexavara/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='pointer'
                src={instagramSocialMedia}
                alt='instagram-social-media'
              />
            </a>
            <a
              href='https://www.linkedin.com/company/hexavara-technology/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='pointer'
                src={linkedinSocialMedia}
                alt='Linkedin-social-media'
              />
            </a>
          </div>
        </div>
      </div>
    </FooterComponentStyled>
  );
};

const FooterComponentStyled = styled.div`
  padding: 60px 0px;
  background: white;
  border-top: 1px solid var(--hxvr-neutral-40);
  .container {
    display: flex;
    flex-direction: column;
    gap: 48px;

    .top-footer {
      display: flex;
      gap: 24px;
      flex-direction: column;
      .company-information {
        img {
          margin-bottom: 24px;
        }
        .company-name {
          color: var(--hxvr-neutral-100);
          margin-bottom: 16px;
        }
        .contact-us {
          color: var(--hxvr-neutral-secondary);
        }
      }
      .addresses {
        display: flex;
        align-items: flex-start;
        gap: 32px;
        .address {
          .address-name {
            margin-bottom: 8px;
          }
          .address-location {
            color: var(--hxvr-neutral-secondary);
          }
        }
      }
    }
    .bottom-footer {
      display: flex;
      justify-content: space-between;
      .copyright {
        color: var(--hxvr-neutral-80);
      }
      .social-media {
        display: flex;
        gap: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      gap: 40px;
      .top-footer {
        flex-direction: column;
        gap: 32px;
        .addresses {
          flex-direction: column;
          gap: 24px;
        }
      }
      .bottom-footer {
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    }
  }
`;

export default FooterComponent;
