import styled from "styled-components";

export const StyledAboutPage = styled.div`
#btnToHome{
    margin:15px;
    background-color: transparent;
    color: var(--primary-color);

}

    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: var(--unit-24);
        margin:20px;
    }

    .content > h1 {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }

    .content > img {
        width: 90%;
    }

    div > p {
        color: var(--primary-color);
        line-height: 20px;
    }

    .content > span {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: var(--unit-8);
        text-align: center;
    }

    .content > span > .first {
        margin-top: var(--unit-8);
    }

    .content > span > p {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: var(--unit-4);
        text-align: center;
    }

    @media (min-width: 600px) {  
        .content {
            margin-left: 20%;
            margin-right: 20%;
        }

        .content > img {
        width: 380px;
        }
    }

    @media (min-width: 800px) {  
        .content {
            margin-left: 32%;
            margin-right: 32%;
        }
    }

    
    @media (min-width: 1600px) {  
        .content {
            margin-left: 38%;
            margin-right: 38%;
        }
    }

    @media (min-width: 2000px) {  
        .content {
            margin-left: 40%;
            margin-right: 40%;
        }
    }

    @media (min-width: 2800px) {  
        .content {
            margin-left: 42%;
            margin-right: 42%;
        }
    }
`;
