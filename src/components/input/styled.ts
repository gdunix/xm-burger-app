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
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease-in-out;
`;

export const Label = styled.label`
  color: #ccc;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
`;
