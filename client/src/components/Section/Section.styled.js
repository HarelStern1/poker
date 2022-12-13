import styled, { css } from "styled-components";
import { colors } from "../../utils/constants";

// Section
export const StyledSection = styled.section`
  position: relative;
  padding: ${({ padding }) => (padding ? padding : "12vmax 12vw")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : colors.black};
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? backgroundImage : null};
`;

// Content
export const Content = styled.div`
  position: relative;
  max-width: 1440px;
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "no-wrap")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`;
