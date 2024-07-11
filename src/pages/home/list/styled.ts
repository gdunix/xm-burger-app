import styled from "styled-components";
import device from "@/styles/device";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  padding: 8px;
  @media ${device.md} {
    padding: 8px;
    flex-direction: column;
    gap: 64px;
  }
`;
