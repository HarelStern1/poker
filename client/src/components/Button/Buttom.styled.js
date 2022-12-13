import styled from "styled-components";
import { colors } from "../../utils/constants";

export const StyledButton = styled.button`
  height: 50px;
  width: ${({ width }) => (width ? width : null)};
  border: none;
  border-radius: ${({ round }) => (round ? "50px" : "4px")};
  color: ${({ color }) => (color ? color : colors.white)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : colors.black};
  padding: ${({ padding }) => (padding ? padding : "12px 30px;")};
  font-weight: 500;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
