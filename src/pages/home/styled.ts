import styled from "styled-components";
import device from "@/styles/device";

export const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    gap: 64px;
  }
  flex-direction: column;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
