import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: #e8e8e8;
  padding: 0 90px;
  gap: 20px;

  h1 {
    color: #0700b4;
  }

  & > div {
    background-color: #fff;
    width: 50%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 20px;
  }

  & > div > p {
    font-weight: 600;
  }

  form {
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0;
    width: 30%;
    height: max-content;
    border-radius: 8px;
  }

  form > button {
    border-radius: 8px;
    padding: 10px;
    transition: 0.3s ease;
    border: none;
    color: #fff;
    background-color: #0700b4;
    cursor: pointer;
  }

  form > button:hover {
    background-color: #7070ff;
  }

  form > span {
    font-size: 12px;
    color: #ff0000;
  }

  form > label {
    font-weight: 500;
    font-size: 16px;
  }

  .quit {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: #b4b4b4;
    padding: 4px 8px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
