import React, { useEffect, useState } from "react";
import { User, X } from "react-feather";
import Input from "../UI/Input";
import { findUserByEmailAndSendCode } from "../services/auth/userService";

interface ForgotProps {
  handleResetPassoword: (value: boolean) => void;
  handleStage: (value: string) => void;
}

export default function ResetPassword({
  handleResetPassoword,
  handleStage,
}: ForgotProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const goTotheNextStage = async () => {
    const response = await findUserByEmailAndSendCode(email);
    if (response.hasOwnProperty("data")) {
      localStorage.setItem("resetPassEmail", email);
      handleStage("verify");
    }
  };

  useEffect(() => {
    setEmailError(!validateEmail(email) && email !== "");
  }, [email]);
  return (
    <div
      className="w-[350px] h-fit bg-white rounded-lg p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex w-full justify-between pb-5">
        <div className="font-oswald text-xl">Reset password</div>
        <X
          className="cursor-pointer"
          onClick={() => {
            handleResetPassoword(false);
            handleStage("forgot-password");
          }}
        />
      </div>

      <Input
        value={email}
        setValue={setEmail}
        placeholder="Email"
        Icon={User}
        errorText="Invalid email format"
        isValueCorrect={!emailError}
      />

      <button
        className="w-full bg-green-900 shadow-md rounded-full h-[40px] duration-500 text-gray-300 text-xs hover:bg-green-800 mt-5 disabled:bg-[#3F704D]"
        onClick={() => goTotheNextStage()}
        disabled={emailError || email === ""}
      >
        Reset Password
      </button>
    </div>
  );
}
