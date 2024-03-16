import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scroll(
      {
        top: 0,
        left: 0,
		behavior: 'smooth'
      }
    );
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight / 2; // 100vh

      setIsScrolled(scrollPosition >= threshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <FloatingButtonStyled data-aos='fade-up' data-aos-duration='1000'>
      {isScrolled && (
        <svg
          data-aos='fade-up'
          data-aos-duration='1000'
          width='80'
          height='80'
          viewBox='0 0 96 96'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={scrollToTop}
        >
          <g filter='url(#filter0_dd_329_1719)'>
            <rect x='20' y='8' width='56' height='56' rx='12' fill='#3182FF' />
            <path
              d='M59.0612 41.0613C58.9218 41.2011 58.7563 41.3121 58.5739 41.3878C58.3916 41.4635 58.1961 41.5025 57.9987 41.5025C57.8013 41.5025 57.6058 41.4635 57.4235 41.3878C57.2411 41.3121 57.0756 41.2011 56.9362 41.0613L47.9999 32.125L39.0612 41.0613C38.7794 41.3431 38.3972 41.5014 37.9987 41.5014C37.6002 41.5014 37.218 41.3431 36.9362 41.0613C36.6544 40.7795 36.4961 40.3973 36.4961 39.9988C36.4961 39.6003 36.6544 39.2181 36.9362 38.9363L46.9362 28.9363C47.0756 28.7965 47.2411 28.6855 47.4235 28.6098C47.6058 28.5341 47.8013 28.4951 47.9987 28.4951C48.1961 28.4951 48.3916 28.5341 48.5739 28.6098C48.7563 28.6855 48.9218 28.7965 49.0612 28.9363L59.0612 38.9363C59.201 39.0757 59.312 39.2412 59.3877 39.4236C59.4634 39.6059 59.5024 39.8014 59.5024 39.9988C59.5024 40.1962 59.4634 40.3917 59.3877 40.574C59.312 40.7564 59.201 40.9219 59.0612 41.0613Z'
              fill='#FDFDFD'
            />
          </g>
          <defs>
            <filter
              id='filter0_dd_329_1719'
              x='0'
              y='0'
              width='96'
              height='96'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feMorphology
                radius='4'
                operator='erode'
                in='SourceAlpha'
                result='effect1_dropShadow_329_1719'
              />
              <feOffset dy='12' />
              <feGaussianBlur stdDeviation='12' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.231373 0 0 0 0 0.254902 0 0 0 0 0.270588 0 0 0 0.08 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_329_1719'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feMorphology
                radius='4'
                operator='erode'
                in='SourceAlpha'
                result='effect2_dropShadow_329_1719'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.231373 0 0 0 0 0.254902 0 0 0 0 0.270588 0 0 0 0.08 0'
              />
              <feBlend
                mode='normal'
                in2='effect1_dropShadow_329_1719'
                result='effect2_dropShadow_329_1719'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect2_dropShadow_329_1719'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      )}
      <a
        href='https://api.whatsapp.com/send?phone=628113451550'
        target='_blank'
        rel='noopener noreferrer'
      >
        <svg
          width='48'
          height='48'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3.61646 60.5092L7.62697 45.8679C5.15278 41.5835 3.85167 36.7215 3.85316 31.7418C3.8606 16.1627 16.5382 3.48804 32.1188 3.48804C39.6799 3.49101 46.775 6.43415 52.1119 11.7741C57.4473 17.1155 60.386 24.2135 60.383 31.7641C60.3771 47.3432 47.6964 60.0194 32.1188 60.0194H32.1069C27.3774 60.0179 22.7282 58.8314 18.6001 56.579L3.61646 60.5092Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3.61601 61.254C3.4195 61.254 3.22895 61.1766 3.08752 61.0336C2.90144 60.8446 2.82849 60.5692 2.89846 60.3146L6.8271 45.9696C4.39161 41.6435 3.10688 36.7308 3.10985 31.7437C3.11581 15.7523 16.1284 2.74414 32.1184 2.74414C39.8744 2.74712 47.1616 5.76766 52.6384 11.249C58.1153 16.7318 61.1299 24.0175 61.1269 31.7646C61.121 47.7546 48.1069 60.7642 32.1184 60.7642C27.371 60.7627 22.6742 59.5911 18.5058 57.3744L3.80507 61.2287C3.74254 61.2465 3.68002 61.254 3.61601 61.254Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M32.1186 3.48869C39.6797 3.49166 46.7747 6.4348 52.1117 11.7747C57.4471 17.1161 60.3858 24.2142 60.3828 31.7648C60.3769 47.3439 47.6962 60.02 32.1186 60.02H32.1067C27.3772 60.0186 22.728 58.8321 18.5999 56.5797L3.61625 60.5098L7.62677 45.8686C5.15258 41.5842 3.85146 36.7221 3.85295 31.7425C3.8604 16.1634 16.538 3.48869 32.1186 3.48869ZM32.1186 2C15.7193 2 2.37171 15.3416 2.36427 31.7425C2.36278 36.7549 3.62816 41.6943 6.02792 46.0666L2.17967 60.1183C2.03973 60.6319 2.18265 61.1797 2.5578 61.5579C2.84065 61.8437 3.22324 62 3.61625 62C3.74279 62 3.86933 61.9836 3.99438 61.9509L18.4153 58.1696C22.6253 60.355 27.3444 61.5087 32.1067 61.5102C48.518 61.5102 61.8656 48.1671 61.873 31.7663C61.876 23.8182 58.784 16.345 53.1672 10.7237C47.5474 5.10093 40.0727 2.00298 32.1186 2Z'
            fill='#CFD8DC'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M48.7352 15.1481C44.2989 10.7089 38.4022 8.26296 32.1259 8.26147C19.1684 8.26147 8.62998 18.7954 8.62402 31.744C8.62254 36.1818 9.8641 40.5019 12.2162 44.243L12.776 45.1318L10.4015 53.7974L19.2934 51.4661L20.1524 51.9752C23.758 54.116 27.8936 55.2474 32.1095 55.2489H32.1185C45.0671 55.2489 55.6055 44.7134 55.6099 31.7634C55.6114 25.4885 53.1715 19.5874 48.7352 15.1481Z'
            fill='#40C351'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M25.0532 19.9307C24.5247 18.7547 23.9679 18.7309 23.4633 18.71C23.0509 18.6921 22.5805 18.6936 22.11 18.6936C21.6396 18.6936 20.8744 18.8708 20.2269 19.5779C19.5793 20.285 17.7542 21.9926 17.7542 25.4672C17.7542 28.9417 20.2849 32.3002 20.6377 32.7706C20.9906 33.2411 25.5236 40.5996 32.702 43.4311C38.6672 45.7833 39.882 45.3158 41.1771 45.1982C42.4723 45.0806 45.3559 43.4907 45.9439 41.8412C46.5319 40.1917 46.5319 38.779 46.3563 38.4842C46.1791 38.1895 45.7087 38.0138 45.0031 37.6595C44.2974 37.3052 40.8243 35.5977 40.1767 35.3624C39.5292 35.1272 39.0587 35.0096 38.5868 35.7168C38.1164 36.4224 36.7632 38.0138 36.3508 38.4842C35.9384 38.9561 35.5261 39.0157 34.8204 38.6614C34.1148 38.3071 31.8401 37.5627 29.1411 35.157C27.0421 33.2857 25.6248 30.9738 25.2125 30.2667C24.8001 29.561 25.1678 29.1785 25.5221 28.8256C25.8392 28.5085 26.2278 28.0009 26.5821 27.5885C26.9349 27.1762 27.0525 26.8814 27.2877 26.411C27.5229 25.9391 27.4053 25.5267 27.2281 25.1739C27.054 24.8196 25.6814 21.3271 25.0532 19.9307Z'
            fill='white'
          />
        </svg>
      </a>
    </FloatingButtonStyled>
  );
};

const FloatingButtonStyled = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;

  & > svg {
    cursor: pointer;
  }
`;
export default FloatingButton;
