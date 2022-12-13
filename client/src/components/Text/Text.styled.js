import styled from "styled-components";
import { colors } from "../../utils/constants";

export const StyledText = styled.p`
  margin: ${({ margin }) => (margin ? margin : 0)};
  font-size: ${({ size }) => (size ? size : "22px")};
  color: ${({ color }) => (color ? color : colors.white)};
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  white-space: ${({ preLine }) => (preLine ? "pre-line" : "normal")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  text-align: ${({ align }) => (align ? align : null)};
`;
