import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 35px 100px 35px;
  flex-direction: column;

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    margin: 0 0 20px 0;
  }

  form {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    a {
      height: 48px;
      max-width: 300px;
      width: 48%;
      border-radius: 28px;
      cursor: pointer;
      background-color: var(--primary-color);
      color: var(--white-color);
      border: solid 1px var(--primary-color);
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    button {
      height: 48px;
      max-width: 300px;
      width: 48%;
      border-radius: 28px;
      cursor: pointer;
      background-color: var(--primary-color);
      color: var(--white-color);
      border: solid 1px var(--primary-color);
    }
  }

  input {
    height: 40px;
    width: 300px;
    border-radius: 25px;
    border: solid 2px var(--grey-three);
    margin-bottom: 10px;
    text-align: center;
    color: var(--primary-color);

    ::placeholder {
      color: var(--black-color);
      font-weight: 400;
    }
  }
`;
