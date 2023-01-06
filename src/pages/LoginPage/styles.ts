import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px 0 0 0;

  h3 {
    margin-bottom: 40px;
  }

  form {
    flex-direction: column;
    display: flex;
    padding: 30px 20px;
    background-color: #f5f5f5;
    width: 100%;
  }

  span {
    margin-bottom: 50px;
    text-align: center;
  }

  p {
    color: var(--Negative);
    position: relative;
    bottom: 10px;
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 400;
    text-align: start;
  }
`;
