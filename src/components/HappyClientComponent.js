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
import client7 from "../assets/images/ui-logo.png";
import client8 from "../assets/images/wika-logo.png";
import client9 from "../assets/images/ui-logo.png";
import client10 from "../assets/images/telkom-logo.png";

const HappyClientComponent = () => {
  return (
    <HappyClientComponentStyled>
      <div className='title display-medium text-center'>
        Some of Our Happy Clients
      </div>
      <Marquee className='logo-container'>
        <img src={client1} alt='client-logo' />
        <img src={client2} alt='client-logo' />
        <img src={client3} alt='client-logo' />
        <img src={client4} alt='client-logo' />
        <img src={client5} alt='client-logo' />
        <img src={client6} alt='client-logo' />
        <img src={client7} alt='client-logo' />
        <img src={client8} alt='client-logo' />
        <img src={client9} alt='client-logo' />
        <img src={client10} alt='client-logo' />
        <img src={client6} alt='client-logo' />
        <img src={client10} alt='client-logo' />
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
    display: flex;
    gap: 32px;
    align-items: center;
  }
`;

export default HappyClientComponent;
