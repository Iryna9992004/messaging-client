import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { loginWorker, loginCompany } from "../services/auth/authService";

interface LoginType {
  accessToken: string;
  companyName: string;
  email: string;
  role: string;
  userId: string;
}

const useLogin = (role: string) => {
  const queryClient = useQueryClient();

  return useMutation({
   mutationFn: async (loginData: {email: string, password: string}) => {
    let response;
    if(role === "worker"){
      response = await loginWorker(loginData);
    }
    else if (role === "company") {
      response = await loginCompany(loginData)
    }
    return response;
   },
   onSuccess: (data: LoginType) => {
    queryClient.setQueryData(["user"], data);
    localStorage.setItem("user", JSON.stringify(data));
   }
  });
};

export default useLogin;
