import ingredients from "@/reactQuery/ingredients";
import useAuth from "@/store/useAuth";

const useIngredients = () => {
  const { getToken } = useAuth();
  const token = getToken();
  const { logout } = useAuth();
  const { data, isLoading, isError } = ingredients.useIngredients({ token });
  isError && logout();
  return { data, isLoading };
};

export default useIngredients;
