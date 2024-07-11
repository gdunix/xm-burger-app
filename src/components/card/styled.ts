import styled from "styled-components";
import device from "@/styles/device";

export const Container = styled.div`
  background-color: #fff;
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px 32px 8px;
  margin: 0 16px;
  @media ${device.sm} {
    padding: 16px 16px 32px 16px;
  }
  @media ${device.md} {
    margin: 0;
    padding: 16px 32px 48px 32px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
