import styled from "styled-components";
import device from "@/styles/device";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #fff;
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  width: 100px;
  @media ${device.sm} {
    width: 160px
    padding: 16px;
  }
  @media ${device.md} {
    padding: 32px;
    flex-direction: column;
    width: 200px;
    align-items: center;
    justify-content: center;
  }
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease-in-out;
  }
`;
