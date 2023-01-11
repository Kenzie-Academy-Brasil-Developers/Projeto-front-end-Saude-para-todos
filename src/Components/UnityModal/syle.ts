import styled from "styled-components";

export const StyledDivModalUnitiesUpa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    max-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000090;
    @media(min-width:768px){
        top: -80px;
    }

`
export const StyledSectionModalUnitiesUpa = styled.section`
        /* top: 50%;
        left: 50%; */
        position: fixed;
        width: 280px;
        min-width: 280px;
        display: flex;
        flex-direction: column;
        padding: var(--unit-16);
        gap: 10px;
        border-radius: var(--radius-4);
        background-color: var(--white-color);
        text-align: start;
        figure{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 200px;
                height: 200px;
            }
        }
        h2{
            font-size: var(--unit-16)
        }
        p{
            font-size: var(--unit-14)
        }
        span{
            font-size: var(--unit-14)
        }
        button{
            background-color: var(--white-color);
            font-size: var(--unit-16);
        }
        div{
            display: flex;
            gap: 5px;
            a{
                color: var(--primary-color);
            }
        }
        section{
                display: flex;
                gap: 20px;
                button{
                    background-color: var(--white-color);
                    border: solid 1px var(--primary-color);
                    color: var(--primary-color);
                    padding: 6px;
                    border-radius:10px ;
                }
            }
        @media(min-width:768px){
            width: 380px;
        }
`
