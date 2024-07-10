import { Navigate } from "react-router-dom";
import useAuth from "@/store/useAuth";

type Props = {
  children: React.ReactNode;
};

const Private = ({ children }: Props) => {
  const isAuthenticated = useAuth.use.isAuthenticated();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Private;
