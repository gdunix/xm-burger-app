import ingredients from "@/reactQuery/ingredients";
import useAuth from "@/store/useAuth";

const useIngredients = () => {
  const token = useAuth.use.token();
  const { logout } = useAuth();
  const { data, isLoading, isError } = ingredients.useIngredients({ token });
  isError && logout();
  return { data, isLoading };
};

export default useIngredients;
