import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border-style: none;
    }
    body {
    }
    button {
        cursor: pointer;
    }
    a {
        color: unset;
        text-decoration: none;
    }
    ul, ol, li {
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input {
        font-family: 'Inter', sans-serif;
    }
    :root{
    --primary-color: #0089FA;
    --second-color: #0BB7DE;
    --third-color: #B0E4FF;
    --black-color: #000000;
    --grey-one: #3C3C3C;
    --grey-two: #515151;
    --grey-three: #666666;
    --grey-four: #F2F4F5;
    --white-color: #FFFFFF;
    --red-alert: #CC3333;
    --yellow-warning: #EED202;
    --green-successful: #4BB543;
    /* RADIUS - BORDER RADIUS */
    --radius-1: 0.3rem;
    --radius-2: 0.5rem;
    --radius-3: 0.8rem;
    --radius-4: 1.25rem;
    /* FONT FAMILY */
    --font-family-1: 'Inter', sans-serif;
    --font-family-2: 'Nunito', sans-serif;
    --font-line-height-1: 150%;
    /* FONT WIGHT */
    --font-weight-3: 300;
    --font-weight-4: 400;
    --font-weight-5: 500;
    --font-weight-6: 600;
    --font-weight-7: 700;
    --font-weight-8: 800;
    --font-weight-9: 900;
    /* FONT TITLES & TEXTS */
    --title-1-48: 3rem;
    --title-2-40: 2.5rem;
    --title-3-32: 2rem;
    --title-4-16: 1rem;
    --title-5-22: 1.375rem;
    --title-6-20: 1.25rem;
    --title-7-18: 1.125rem;
    --text-1-18:  1.125rem;
    --text-2-16:  1rem;
    --text-3-14:  0.875rem;
    /* UNITS PX */
    --unit-4: 4px;
    --unit-8: 8px;
    --unit-12: 12px;
    --unit-14: 14px;
    --unit-16: 16px;
    --unit-20: 20px;
    --unit-24: 24px;
    --unit-32: 32px;
    --unit-40: 40px;
    --unit-48: 48px;
    --unit-56: 56px;
    --unit-64: 64px;
    --unit-72: 72px;
    --unit-80: 80px;
    --unit-88: 88px;
    /* UNITS REM * EQUIVALENT TO PX UNITS */
    --unit-rem-4: 0.25rem;
    --unit-rem-8: 0.5rem;
    --unit-rem-10: 0.625rem;
    --unit-rem-12: 0.75rem;
    --unit-rem-14: 0.875rem;
    --unit-rem-16: 1rem;
    --unit-rem-20:1.25rem;
    --unit-rem-24: 1.5rem;
    --unit-rem-32: 2rem;
    --unit-rem-40: 2.5rem;
    --unit-rem-48: 3rem;
    --unit-rem-56: 3.5rem;
    --unit-rem-64: 4rem;
    --unit-rem-72: 4.5rem;
    --unit-rem-80: 5rem;
  }
`;
