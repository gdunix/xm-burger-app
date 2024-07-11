import React from "react";
import useAuth from "@/store/useAuth";
import { Container, Title } from "./styled";
import Logout from "./logout";


const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Container>
      <Title to="/">Burger App</Title>
      {isAuthenticated && <Logout />}
    </Container>
  );
};

export default Header;
