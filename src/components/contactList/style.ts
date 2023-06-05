import styled from "styled-components";

export const StyledUl = styled.ul`
  background-color: #e6f7fd;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  max-height: 100%;
  overflow-y: auto;

  li {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  p {
    font-size: 15px;
    font-weight: 600;
  }

  .delete_btn {
    padding: 2px 4px;
    border: none;
    border-radius: 4px;
    background-color: #ff0000;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  button:hover {
    background-color: #ff4848;
  }
`;
