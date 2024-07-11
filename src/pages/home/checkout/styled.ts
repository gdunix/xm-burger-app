import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 0;
  align-items: flex-end;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  width: 90%;
`;
