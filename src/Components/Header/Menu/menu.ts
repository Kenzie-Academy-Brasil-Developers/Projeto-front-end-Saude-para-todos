import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  height: 100vh;

  li {
    border-bottom: 1px solid black;
    padding: 15px;
    display: flex;
    justify-content: center;
  }
`;
