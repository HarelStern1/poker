import styled from "styled-components";

import { colors } from "../../utils/constants";

export const TableWrapper = styled.div`
  position: relative;
  height: 450px;
  width: 100%;
  background-color: ${colors.green};
  border: 24px solid ${colors.brown};
  border-radius: 400px;

  /* > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  } */
`;
