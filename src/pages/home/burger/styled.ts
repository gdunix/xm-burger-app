import styled from "styled-components";
import device from "@/styles/device";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  @media ${device.md} {
    width: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
