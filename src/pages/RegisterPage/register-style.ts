import styled from "styled-components"

export const StyledRegister = styled.main`

    margin: var(--unit-40) var(--unit-20);

    /* .brand > .logo {
        margin-bottom: var(--unit-24);
    }

    .brand > div {
        background-color: var(--white);
        border: solid 1px var(--grey-20);
        border-radius: var(--radius-1);
        color: var(--grey-50);

        display: flex;
        align-items: center;

        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-5);
        line-height: var(--font-line-height-1);

        padding-right: var(--unit-14);
    }

    .brand > div > figure {
        display: flex;
        margin: var(--unit-14);
        width: 60px;
        height: 60px;
    }

    .brand > div > figure > img {
        background-color: var(--color-primary-50);
        border: solid 1px var(--grey-20);
        border-radius: var(--radius-1);
        color: var(--pallete_success);
        padding: var(--unit-16);
    }

    .brand > div > p > span {
        color: var(--grey-100);
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-5);
        line-height: var(--font-line-height-1);
    }

    .brand > .dots {
        display: none;
        background-color: var(--grey-0);
        color: var(--grey-100);
    } */

    .content {
        background-color: var(--white);
        border: solid 1px var(--grey-20);
        border-radius: var(--radius-1);
        margin-top: var(--unit-14)
    }

    .content > .content-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 16px;
    }

    .content > div > h1 {
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        margin-top: 6px;
    }

    .content > div > .grey-Link {
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-5);
        line-height: var(--font-line-height-1);
        margin: 0 0 0 0;

        border: none;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--grey-50);
        height: 0px;
        width: fit-content;
        padding: 0 0;
    }

    .content > div {
        margin: var(--unit-14);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: var(--unit-16);
    }

    .content > div > p {
        color: var(--grey-50);
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-5);
        line-height: var(--font-line-height-1);
        padding-right: var(--unit-14);
        margin-bottom: var(--unit-14);
        text-align: center;
    }

    .p-error {
        color: var(--color-secondary);
    }

   @media (min-width: 425px) {  
        margin: var(--unit-40) 8%;
    }

    @media (min-width: 425px) {  
        margin: var(--unit-40) 12%;
    }

    @media (min-width: 525px) {  
        margin: var(--unit-40) 15%;
    }

    @media (min-width: 625px) {  
        margin: var(--unit-40) 18%;
    }

    @media (min-width: 1000px) {
        margin: 8% 12%;
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 8%;

        .brand {
            width: 68%;
        }

        .brand > .dots {
            display: flex;
            margin-top: var(--unit-14);
        }
    }

    @media (min-width: 1000px) {
        gap: 8%;

        .content {
            width: 50%;
        }

        .brand {
            width: 50%;
        }
    }

    @media (min-width: 1600px) {
        margin: 8% 18%;
        gap: 8%;

        .content {
            width: 55%;
        }

        .brand {
            width: 55%;
        }
    }

    @media (min-width: 2000px) {
        margin: 8% 21%;
        gap: 8%;

        .content {
            width: 40%;
        }

        .brand {
            width: 40%;
        }
    }

    /* @media (min-width: 1440px){
    } */

    /* @media (min-width: 2200px){
    } */
`