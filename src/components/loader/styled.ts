import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate} 1s linear infinite;
  transform: translateZ(0);

  border-top: ${props => `2px solid ${props.theme.colors.primary}`};
  border-right: ${props => `2px solid ${props.theme.colors.primary}`};
  border-bottom: ${props => `2px solid ${props.theme.colors.primary}`};
  border-left: ${props => `4px solid ${props.theme.colors.primary}`};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Loader;
