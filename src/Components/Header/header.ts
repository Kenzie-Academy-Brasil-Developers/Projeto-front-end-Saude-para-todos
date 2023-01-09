import styled from "styled-components";

export const StyledDiv = styled.div`
display:flex;
justify-content: space-between;
padding: 20px 15px;
background-color: var(--primary-color);
color:white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

div{
    display:flex;
    align-items: center;
    gap:10px;
}

button{
    color:white;
    background-color: transparent;
}

#btnMenu{
    border-bottom: 1px solid white;
}
`