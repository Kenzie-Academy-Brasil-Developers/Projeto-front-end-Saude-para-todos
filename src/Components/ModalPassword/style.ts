import styled from "styled-components";

export const ModalBackground = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    inset: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    min-width: 350px;
    height: 100%;
    border-radius: 8px;
    background-color: var(--grey-four);
    
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

export const FormModalUser = styled.form`
    width: 90%;
    
    display: flex;
    flex-direction: column;
    gap: 25px;
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
        background: var(--grey-four);
        color: var(--black-color);
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        padding: 0 20px;
        width: 100%;
        height: 38.38px;
    }
    input:focus{
        outline-color: var(--Grey-3);
    }
    input:disabled{
        cursor: not-allowed;
        opacity: .5s;
    }
    select{
        background: var(--Grey-2);
        color: var(--Grey-1);
        border-radius: 4px;
        padding: 0 20px;
        width: 100%;
        height: 38.38px;
    }
`