import styled from "styled-components";
import device from "@/styles/device";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: ${(props) => props.theme.colors.secondary};

  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 16px;
  @media ${device.md} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
