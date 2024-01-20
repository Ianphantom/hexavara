import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

// import images
import founder1 from "../../assets/images/founder-tegar.jpg";
import founder2 from '../../assets/images/founder-luffi.jpg';

const AboutPagesSectionFive = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutPagesSectionFiveStyled className='container'>
      <div className='title text-center display-small'>Meet Our Key Team</div>
      <div className='team-container'>
        <ProfileContainerStyled data-aos='fade-up' data-aos-duration='1000'>
          <img src={founder1} alt='team-profile' />

          <div className='information'>
            <div className='title paragraph-medium regular'>CEO & Founder</div>
            <div className='name heading-medium'>Ramadhani Tegar Perkasa</div>
          </div>
        </ProfileContainerStyled>
        <ProfileContainerStyled data-aos='fade-up' data-aos-duration='1000'>
          <img src={founder2} alt='team-profile' />

          <div className='information'>
            <div className='title paragraph-medium regular'>CEO & Founder</div>
            <div className='name heading-medium'>Luffi Aditya Sandy</div>
          </div>
        </ProfileContainerStyled>
      </div>
    </AboutPagesSectionFiveStyled>
  );
};

const ProfileContainerStyled = styled.div`
  width: 386px;
  img {
    margin-bottom: 30px;
    border-radius: 8px;
    width: 100%;
    height: 478px;
  }
  .information {
    .title {
      margin-bottom: 4px;
      color: var(--primary-base);
    }

    .name {
      color: var(--hxvr-neutral-100);
      margin-bottom: 16px;
    }

    .desc {
      color: var(--hxvr-neutral-secondary);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AboutPagesSectionFiveStyled = styled.div`
  padding: 80px 0px;
  .title {
    color: var(--hxvr-neutral-100);
    margin-bottom: 48px;
  }

  .team-container {
    display: flex;
    align-items: center;
    gap: 60px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .team-container {
      flex-direction: column;
    }
  }
`;

export default AboutPagesSectionFive;
