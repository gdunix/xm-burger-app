import React from "react";
import useAuth from "@/store/useAuth";
import { Link } from "./styled";

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const onClick = () => logout();
  return <Link onClick={onClick}>Logout</Link>;
};

export default Logout;
