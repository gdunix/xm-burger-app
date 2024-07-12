import { Navigate } from "react-router-dom";
import useAuth from "@/store/useAuth";

type Props = {
  children: React.ReactNode;
};

const Private = ({ children }: Props) => {
  const { gteIsAuthenticated } = useAuth();
  const isAuthenticated = gteIsAuthenticated();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Private;
