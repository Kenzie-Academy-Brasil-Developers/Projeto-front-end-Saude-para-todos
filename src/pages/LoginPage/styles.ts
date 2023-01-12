import styled from "styled-components";
export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 40px 0 0 0;
  gap: 1rem;
  img {
    min-width: 15rem;
    max-width: 20rem;
    max-height: 50rem;
    padding: 1.2rem 1.2rem;
  }
  form {
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 3rem 2rem;
    background-color: #F5F5F5;
    width: 100%;
    max-width: 30rem;
    max-height: 50rem;
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