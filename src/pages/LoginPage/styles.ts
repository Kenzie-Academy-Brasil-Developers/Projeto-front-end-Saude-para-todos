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
    margin: 50px 0;
    text-align: center;
    color: var(--primary-color);
  }

  p {
    color: var(--Negative);
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 400;
    text-align: start;
  }

  a {
    width: 100%;
    border: solid 2px var(--primary-color);
    height: 50px;
    border-radius: 50px;
    color: var(--primary-color);
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
