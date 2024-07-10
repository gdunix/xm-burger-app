import styled from "styled-components";


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;


export const TooltipWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.9s ease-in-out, visibility 0.9s ease-in-out;
  z-index: 10;
  height: fit-content;

  &.show {
    opacity: 1;
    visibility: visible;
    animation: fadeIn 5s ease, pop-up 0.2s ease-in-out forwards;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 0;
  color: #fff;
`;
