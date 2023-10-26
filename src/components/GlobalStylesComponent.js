import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }

    html {
        --primary-90: #102B55;
        --primary-80: #194180;
        --primary-70: #2157AA;
        --primary-60: #296CD4;
        --primary-base: #3182FF;
        --primary-50: #5397FF;
        --primary-40: #76ACFF;
        --primary-30: #98C0FF;
        --primary-20: #BAD5FF;
        --primary-10: #F5F9FF;
        --primary-100: #0A1A33;

        --hxvr-brand-100: #101E2B;
        --hxvr-brand-90: #274B6C;
        --hxvr-brand-80: #346590;
        --hxvr-brand-70: #3182FF;
        --hxvr-brand-60: #6BA8DE;
        --hxvr-brand-50: #A6CBEB;
        --hxvr-brand-40: #C4DCF2;
        --hxvr-brand-30: #ECF6FF;

        --hxvr-neutral-100: #333135;
        --hxvr-neutral-secondary: #616161;
        --hxvr-neutral-80: #8A8A8A;
        --hxvr-neutral-70: #B5B5B5;
        --hxvr-neutral-60: #CCCCCC;
        --hxvr-neutral-50: #D4D4D4;
        --hxvr-neutral-40: #F6F6F6;
        --hxvr-neutral-30: #FDFDFD;

        --hxvr-blue-100: #033E5B;
        --hxvr-blue-90: #066798;
        --hxvr-blue-80: #077CB6;
        --hxvr-blue-70: #3092C2;
        --hxvr-blue-60: #5AA8CE;
        --hxvr-blue-50: #83BDDA;
        --hxvr-blue-40: #ACD3E7;
        --hxvr-blue-30: #CDE5F0;

        --hxvr-yellow-100: #AA7D00;
        --hxvr-yellow-90: #D49C00;
        --hxvr-yellow-80: #FFBB00;
        --hxvr-yellow-70: #FFC62A;
        --hxvr-yellow-60: #FFD255;
        --hxvr-yellow-50: #FFDD80;
        --hxvr-yellow-40: #FFE8AA;
        --hxvr-yellow-30: #FFF1CC;

        --hxvr-green-100: #04522B;
        --hxvr-green-90: #078948;
        --hxvr-green-80: #09A557;
        --hxvr-green-70: #32B473;
        --hxvr-green-60: #5BC38F;
        --hxvr-green-50: #84D2AB;
        --hxvr-green-40: #ADE1C7;
        --hxvr-green-30: #CEEDDD;

        --hxvr-red-100: #BF1700;
        --hxvr-red-90: #E51C00;
        --hxvr-red-80: #EC5D5D;
        --hxvr-red-70: #FA8989;
        --hxvr-red-60: #FDB0AC;
        --hxvr-red-50: #FEC3C1;
        --hxvr-red-40: #FEDAD9;
        --hxvr-red-30: #FEF2ED;
    }

    .bold{
        font-weight: 700 !important;
    }

    .regular{
        font-weight: 400 !important;
    }

    .display-xlarge{
        font-size: 4rem;
        line-height: 5rem;
        font-weight: 600;
    }

    .display-large{
        font-size: 3.5rem;
        line-height: 4.5rem;
        font-weight: 600;
    }

    .display-medium{
        font-size: 3rem;
        line-height: 4rem;
        font-weight: 600;
    }

    .display-small{
        font-size: 2.5rem;
        line-height: 3.5rem;
        font-weight: 600;
    }

    .heading-large{
        font-size: 2rem;
        line-height: 2.75rem;
        font-weight: 600;
    }

    .heading-medium{
        font-size: 1.75rem;
        line-height: 2.5rem;
        font-weight: 600;
    }

    .heading-small{
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 600;
    }

    .paragraph-large{
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 600;
    }

    .paragraph-medium{
        font-size: 1rem;
        line-height:1.5rem;
        font-weight: 600;
    }

    .paragraph-small{
        font-size: 0.875rem;
        line-height:1.25rem;
        font-weight: 600;
    }

    .label-medium{
        font-size: 0.75rem;
        line-height:1.25rem;
        font-weight: 600;
    }

    .pointer{
        cursor: pointer;
    }

    .border-radius-medium{
        border-radius: 8px;
    }

    .border-radius-large{
        border-radius: 12px;
    }

    .border-radius-4{
        border-radius: 4px;
    }

    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
    
`;

export default GlobalStyle;
