import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: #e8e8e8;

  form {
    display: flex;
    flex-direction: column;
    gap: 13px;
    background-color: #fff;
    padding: 50px 30px;
    border-radius: 9px;
    width: 45%;
  }

  form > label {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    border-radius: 8px;
    padding: 10px;
    transition: 0.3s ease;
    border: none;
    color: #fff;
    background-color: #0700b4;
    cursor: pointer;
  }

  button:hover {
    background-color: #7070ff;
  }

  p {
    font-size: 12px;
    text-align: center;
  }

  a {
    color: #0000ff;
  }

  span {
    font-size: 12px;
    color: #ff0000;
  }
`;
