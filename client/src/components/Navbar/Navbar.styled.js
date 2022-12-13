import styled from "styled-components";
import { colors } from "../../utils/constants";

export const Wrapper = styled.nav`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;
  background-color: transparent;
  box-shadow: ${({ shadow }) =>
    shadow ? " 0px 0px 8px 0px rgb(0 0 0 / 50%)" : null};
  color: ${colors.white};
  padding: 0 120px;
  position: fixed;
  z-index: 2;
  top: 0;
  transition: all 0.2s ease;
`;

export const LogoWrapper = styled.div``;
