import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.header`
  padding: 1rem 2rem;
  background-color: #ff6600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0;
`;

export const Title = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;
