import styled from "styled-components";
import device from "@/styles/device";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 0 16px;
  @media ${device.md} {
    padding: 0 32px;
  }
`;

export const ErrorMsg = styled.div`
  color: ${props => props.theme.colors.primary};
`;
