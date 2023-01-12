import styled from "styled-components";

export const StyledDivModalUnitiesUpa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000090;
`
export const ContainerForm = styled.div`
    width: 325px;
    
`

export const FormModalUser = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    background: var(--Grey-3);
    color: var(--Color-white);

    input, label{
        display: block;
        
    }
    p{
        font-weight: 400;
        font-size: 12px;
    }
    label{
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 10px;
    }

    input[type='text'],
    input[type='email'],
    input[type="password"]{
        background: var(--white-color);
        color: var(--primary-color);
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        padding: 0 20px;
        width: 100%;
        height: 38.38px;
    }
    input:focus{
        outline-color: var(--primary-color);
    }
    input:disabled{
        cursor: not-allowed;
        opacity: .5s;
    }
    
`

export const StyledSectionModalUnitiesUpa = styled.section`
        width: 280px;
        min-width: 280px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: var(--unit-16);
        gap: 10px;
        border-radius: var(--radius-4);
        background-color: var(--white-color);
        text-align: start;
        position: relative;

        .closeModal {
            position: absolute;
            right: 24px;
            color: var(--primary-color);
            transform: rotate(45deg);
            font-size: var(--unit-32);
            font-weight: var(--font-weight-4);
        }

        figure{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 200px;
                height: 200px;
                margin-bottom: 16px;
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
                    border-radius:10px;
                    margin: 20px 0;
                }
            }
        @media(min-width:768px){
            width: 380px;
        }
`
