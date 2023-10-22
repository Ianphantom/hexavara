import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }

    .bold{
        font-size: 700 !important;
    }

    .regular{
        font-size: 400 !important;
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
    
`;

export default GlobalStyle;
