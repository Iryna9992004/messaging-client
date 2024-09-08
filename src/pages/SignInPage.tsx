import React, { useEffect, useState } from "react";
import { User, Lock } from "react-feather";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { roles } from "../data/roles";
import useLogin from "../hooks/loginHook";
import ResetingPassword from "../widgets/ResetingPassword";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();
  const [isResetPasswordOpened, setIsResetPasswordOpened] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("worker");
  const loginMutation = useLogin(selectedRole);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleResetPassoword = (value: boolean) => {
    setIsResetPasswordOpened(value);
  };

  const handleLoginUser = async () => {
    if (!emailError && !passwordError) {
      loginMutation.mutate(
        { email, password },
        {
          onSuccess: (data) => {
            navigate("/messaging");
          },
          onError: (error) => {
            console.log("Err", error);
          },
        }
      );
    }
  };

  const handleSelectRole = (item: string) => {
    setSelectedRole(item);
  };

  useEffect(() => {
    setEmailError(!validateEmail(email) && email !== ""); // Перевіряємо формат email
  }, [email]);

  useEffect(() => {
    setPasswordError(password.length < 6 && password !== ""); // Мінімум 6 символів
  }, [password]);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      {isResetPasswordOpened ? (
        <ResetingPassword handleResetPassoword={handleResetPassoword} />
      ) : null}
      <div className="flex flex-col items-center gap-5 min-w-[350px] border p-7 rounded-xl shadow-lg">
        <span className="font-semibold text-gray-400 text-3xl font-oswald mb-4">
          Login
        </span>
        <Select
          list={roles}
          text={selectedRole}
          selectRole={handleSelectRole}
        />
        <Input
          value={email}
          setValue={setEmail}
          placeholder="Email"
          Icon={User}
          errorText="Invalid email format"
          isValueCorrect={!emailError}
        />

        <Input
          value={password}
          setValue={setPassword}
          placeholder="Password"
          Icon={Lock}
          errorText="Password length should be at least 6 characters"
          isValueCorrect={!passwordError}
        />

        <button
          onClick={() => handleLoginUser()}
          className="w-full bg-green-700 shadow-md rounded-full h-[40px] duration-500 text-gray-300 text-sm hover:bg-green-800"
        >
          Log in
        </button>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-[6px]">
            <span className="text-xs text-gray-500 cursor-pointer font-medium">
              Don`t have an account?
            </span>
            <Link
              to="/auth/registration"
              className="text-xs text-green-600 cursor-pointer font-medium border-b border-green-600"
            >
              <div>Sign up</div>
            </Link>
          </div>

          <div
            className="text-xs text-gray-500 cursor-pointer font-medium"
            onClick={() => setIsResetPasswordOpened(true)}
          >
            Forgot password?
          </div>
        </div>
      </div>
    </div>
  );
}
