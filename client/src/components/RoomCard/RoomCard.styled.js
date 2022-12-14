import styled from "styled-components";
import { colors } from "../../utils/constants";

export const CardWrapper = styled.div`
  position: relative;
  height: 150px;
  width: 280px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${colors.green};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 10px 10px -12px;
`;

export const PlayersCount = styled.div`
  position: absolute;
  bottom: -15px;
  height: 40px;
  width: 80px;
  background-color: ${colors.yellow};
  border: none;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: ${colors.black};
`;
