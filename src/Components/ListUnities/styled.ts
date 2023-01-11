import styled from "styled-components";

export const StyledDivUnitiesUl = styled.div`
    width: 100%;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
        padding-left: 10px;
        justify-content: flex-start;
    }
`
export const StyledUlListUnities = styled.ul`
    display: flex;
    overflow-x: scroll;
    overflow-y:hidden;
    width: 300px;
    gap: 10px;
    padding: var(--unit-16);
    @media(min-width: 768px){
        width: 90%;
        justify-content: flex-start;
  
    }
`
export const StyledCardListUnities = styled.li`
    width: 280px;
    min-width: 280px;
    height: 180px;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    padding: var(--unit-8);
    gap: 10px;
    border-radius: var(--radius-4);
    background-color: var(--grey-four);
    box-shadow: 2.5px 2.5px 1px  var(--grey-two);
    text-align: center;
    align-items: center;
    justify-content: center;
    h2{
        font-size: var(--unit-16);
    }
    span{
        font-size: var(--unit-14);
        color: var(--primary-color);
    }
    p{
        font-size: var(--unit-14);
         
    }
    @media(min-width: 768px){

    }
`