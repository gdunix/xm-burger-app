import styled from "styled-components";
import device from "@/styles/device";

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Content = styled.div`
  position: relative;
`;

export const Info = styled.div`
  position: absolute;
  top: 20px;
  right: -20px;
  width: 60px;
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  border-radius: 8px;
  padding: 4px;
  background-color: #fff;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  @media ${device.md} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  font-weight: bold;
`;
