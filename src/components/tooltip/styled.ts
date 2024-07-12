import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -120%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -100%);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -100%);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -120%);
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

type TooltipWrapperProps = {
  visible: boolean;
};

export const TooltipWrapper = styled.div<TooltipWrapperProps>`
  position: absolute;
  top: 10px;
  left: 160px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  z-index: 10;

  animation: ${({ visible }) => (visible ? fadeInUp : fadeOutDown)} 0.3s
    forwards;
}`;

export const Text = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 0;
  color: #fff;
`;
