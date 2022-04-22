import styled, { keyframes } from "styled-components";

import loadingRing from "./assets/loading-ring.svg";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingRing = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${loadingRing}) no-repeat 0 0;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${spin};
  // prevents flickering on Firefox
  backface-visibility: hidden;
`;
