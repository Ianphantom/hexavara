import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

// immport component
import ButtonComponent from "../../components/ButtonComponent";

// import icon
import { ArrowUpRight } from "@phosphor-icons/react";
import jumbotron from "../../assets/images/jumbotron.webp";

const ServicePagesSectionOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ServicePagesSectionOneStyled>
      <div className='container'>
        <div
          className='title display-large'
          data-aos='fade-right'
          data-aos-duration='1500'
        >
          Make your business more efficient with our technology.
        </div>

        {/* <div className='desc paragraph-medium regular'>
          Lorem ipsum lor dolor calamet Lorem ipsum lor dolor calametLorem ipsum
          lor dolor calametLorem ipsum lor dolor calametLorem ipsum lor dolor
          calamet.
        </div> */}

        <div className='button-cta-container'>
          <ButtonComponent
            text='Talk to Us'
            icon={<ArrowUpRight size={32} />}
            className='button filled-secondary border-radius-4 pointer paragraph-large'
            data-aos='fade-right'
            data-aos-duration='1500'
            data-aos-delay='300'
          />
          <div
            className='works paragraph-large pointer'
            data-aos='fade-right'
            data-aos-duration='1500'
            data-aos-delay='500'
          >
            Check our works
          </div>
        </div>
      </div>
    </ServicePagesSectionOneStyled>
  );
};

const ServicePagesSectionOneStyled = styled.div`
  margin-bottom: 40px;
  background: linear-gradient(
      180deg,
      rgba(13, 13, 13, 0.2) 17.27%,
      #052a4b 110.15%
    ),
    url(${jumbotron});

  background-size: cover;
  .container {
    padding: 214px 0px;
    .title {
      color: var(--hxvr-neutral-30);
      width: 75%;
      margin-bottom: 32px;
    }
    .desc {
      margin-bottom: 32px;
      width: 75%;
      color: var(--hxvr-neutral-30);
    }
    .button-cta-container {
      display: flex;
      gap: 20px;
      align-items: center;
      .works {
        padding: 12px 16px;
        color: var(--hxvr-neutral-30);
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .title {
        width: 100%;
      }
    }
  }
  @media (max-width: 576px) {
    .container {
      padding: 100px 0px;
      width: 90%;
    }
  }
`;

export default ServicePagesSectionOne;
