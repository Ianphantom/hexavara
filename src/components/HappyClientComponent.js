import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

// import assets
import client1 from "../assets/images/bank-bengkulu-logo.png";
import client2 from "../assets/images/bkd-jatim.png";
import client3 from "../assets/images/its-logo.png";
import client4 from "../assets/images/perindo-logo.png";
import client5 from "../assets/images/telkom-logo.png";
import client6 from "../assets/images/ubaya-logo.png";
import client7 from "../assets/images/Berau Coal.png";
import client8 from "../assets/images/wika-logo.png";
import client9 from "../assets/images/banjarbaru-logo.png";
import client10 from "../assets/images/x-logo.png";
import client11 from "../assets/images/UNAIR(1).png";
import client12 from "../assets/images/unilever-logo.png";
import client13 from "../assets/images/y-logo.png";
import client14 from "../assets/images/pjb-logo.png";
import client15 from "../assets/images/zelltech-logo.png";
import client16 from "../assets/images/BMT Muda.jpg";
import client17 from "../assets/images/Dianca Goods.png";
import client18 from "../assets/images/Telkom AMOEBA.png";
import client19 from "../assets/images/Sinarmas.png";
import client20 from "../assets/images/UI.png";
import client21 from "../assets/images/kominfo.png";

const HappyClientComponent = () => {
  return (
    <HappyClientComponentStyled>
      <div className='title display-medium text-center'>
        Some of Our Happy Clients
      </div>
      <Marquee className='logo-container'>
        <img src={client5} alt='client-logo' />
        <img src={client6} alt='client-logo' />
        <img src={client8} alt='client-logo' />
        <img src={client9} alt='client-logo' />
        <img src={client10} alt='client-logo' />
        <img src={client11} alt='client-logo' />
        <img src={client1} alt='client-logo' />
        <img src={client12} alt='client-logo' />
        <img src={client3} alt='client-logo' />
        <img src={client13} alt='client-logo' />
        <img src={client4} alt='client-logo' />
        <img src={client14} alt='client-logo' />
        <img src={client7} alt='client-logo' />
        <img src={client15} alt='client-logo' />
        <img src={client16} alt='client-logo' />
        <img src={client17} alt='client-logo' />
        <img src={client18} alt='client-logo' />
        <img src={client2} alt='client-logo' />
        <img src={client19} alt='client-logo' />
        <img src={client20} alt='client-logo' />
        <img src={client21} alt='client-logo' />
      </Marquee>
    </HappyClientComponentStyled>
  );
};

const HappyClientComponentStyled = styled.div`
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  .logo-container {
    margin-top: 50px;
    display: flex;
    align-items: center;

    img {
      height: 60px;
      margin-left: 40px;
    }
  }
`;

export default HappyClientComponent;
