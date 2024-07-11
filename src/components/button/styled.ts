import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  font-size: 14px;
`;

export default Button;
