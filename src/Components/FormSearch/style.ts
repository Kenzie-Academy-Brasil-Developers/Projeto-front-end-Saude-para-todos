import styled from "styled-components";

export const StyledSearchHome = styled.div`
    width: 100%;
    min-width: 100vw;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    form{
        width: 300px;
        display: flex;
        position: relative;
        
        input{
            
            width: 280px;
            height: 40px;
            padding: 8px 16px;
            background-color: var(--grey-four);
            border-radius:var(--radius-4) ;
            box-shadow: 2.5px 2.5px 1px  var(--grey-two);
        }
        button{
            position: absolute;
            background-color: var(--grey-four);
            border-radius:var(--radius-4);
            left: 205px;
            top: 13px;
           
        }
        button:hover{
            background-color:var(--primary-color) ;
        }

    }
    @media(min-width: 768px){
        justify-content: flex-start;
        form{
            width: 600px;
            input{
                width: 400px;  
            }
            button{
                left: 320px;
            }
        }

       }
`