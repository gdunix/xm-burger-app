import React from "react";
import { Main } from "./styled";
import GlobalStyles from "./globalStyles";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
