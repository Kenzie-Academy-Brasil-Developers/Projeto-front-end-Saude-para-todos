import styled from "styled-components";

export const StyledDivModalUnitiesUpa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: aqua;
    @media(min-width:768px){
        top: -80px;
    }

`
export const StyledSectionModalUnitiesUpa = styled.section`
        position: fixed;
        width: 280px;
        min-width: 280px;
        display: flex;
        flex-direction: column;
        padding: var(--unit-12);
        gap: 10px;
        border-radius: var(--radius-4);
        background-color: var(--grey-one);
        text-align: center;
        h2{
            color: var(--white-color);
            font-size: var(--unit-16)
        }
        p{
            color: var(--white-color);
            font-size: var(--unit-14)
        }
        span{
            color: var(--primary-color);
            font-size: var(--unit-14)
        }
        button{
            background-color: var(--grey-one);
            color: var(--white-color);
            font-size: var(--unit-16);
        }
        @media(min-width:768px){
            width: 380px;
        }
`
