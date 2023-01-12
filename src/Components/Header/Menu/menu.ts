import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  height: 100vh;
  background-color: var(--grey-four);
  position: absolute;
  z-index: 10;
  width:100%;
  right:0;

  li {
    border-bottom: 1px solid black;
    padding: 15px;
    display: flex;
    justify-content: center;
  }

@media(min-width:800px){
  width:500px;
}
`;
