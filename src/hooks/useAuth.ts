import toast from "react-hot-toast";
import { loginUser, registerUser, User } from "../services/auth";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const nav = useNavigate();
  function handleRegister(values: User) {
    registerUser(values).then(() => {
      toast.success("Thanh Cong");
      nav("/login");
    });
  }
  function handleLogin(values: User) {
    loginUser(values).then(({ data }) => {
      localStorage.setItem("token", data.accessToken);
      toast.success("Thanh Cong");
      nav("/product/list");
    });
  }
  return {
    handleLogin,
    handleRegister,
  };
}
