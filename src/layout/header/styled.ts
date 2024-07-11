import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.header`
  padding: 20px 20px;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;
