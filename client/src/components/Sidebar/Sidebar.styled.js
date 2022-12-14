import styled from "styled-components";
import { colors } from "../../utils/constants";

export const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0 4px 4px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-top: 100px;
  padding-bottom: 20px;
  margin-left: 10px;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
