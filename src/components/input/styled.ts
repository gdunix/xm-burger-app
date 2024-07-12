import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 8px;
`;
