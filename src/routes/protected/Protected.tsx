import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Private = ({ children}: Props) => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Private;
