
import styled from "styled-components";

export const PagPasswordBackground = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    inset: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PagePasswordContainer = styled.div`
    min-width: 100%;
    height: 100vh;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & > .textArea{
        background: var(--Grey-5);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        border-radius: 4px 4px 0px 0px;

        h3{
            font-weight: 700;
            font-size: 11.2304px;
            color: var(--Color-white);
        }

        button{
            background: transparent;
            color: var(--Grey-1);
            cursor: pointer;
        }
    }
    

`

export const FormPagePassword = styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
    

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

export const StyledDivPerfill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img{
        border-radius: 50%;
        width: 150px;
        height: 150px;

    }

    button{

    }
`