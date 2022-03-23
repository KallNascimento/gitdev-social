import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px 0 0 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    text-transform: uppercase;
    color: #6FB2D2;
  
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    border-radius: 0 8px 8px 0;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
