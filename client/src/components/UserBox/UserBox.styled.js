import styled from "styled-components";

export const UserBoxWrapper = styled.div`
  // bottom middle
  &:nth-child(1) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  // bottom right
  &:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  // top right
  &:nth-child(3) {
    position: absolute;
    top: 0;
    right: 0;
  }

  // top middle
  &:nth-child(4) {
    position: absolute;
    top: 0;
    right: 45%;
    transform: translate(0, -50%);
  }

  // top left
  &:nth-child(5) {
    position: absolute;
    top: 0;
    left: 0;
  }

  // left bottom
  &:nth-child(6) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
