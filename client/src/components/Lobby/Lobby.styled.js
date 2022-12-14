import styled from "styled-components";
import { colors } from "../../utils/constants";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.gray};
  background-color: #202020;
  padding: 60px 100px;
`;

export const DividerWrapper = styled.div`
  margin: 140px 40px 50px;
`;

export const Line = styled.div`
  height: 0.5px;
  width: 100%;
  background-color: ${colors.white};
  margin-top: 15px;
`;
