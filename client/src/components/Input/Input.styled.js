import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  border: 1px solid #e5e7e9;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  height: 46px;
  width: 100%;
  padding-left: 18px;
  outline: none;
  font-size: 15px;
  font-weight: 500;

  &::placeholder {
    color: gray;
  }
`;
