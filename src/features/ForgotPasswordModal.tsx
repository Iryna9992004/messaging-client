import React, { useState } from "react";
import { X, Lock } from "react-feather";
import Input from "../UI/Input";
import { resetPass } from "../services/auth/userService";

interface ForgotProps {
  handleResetPassoword: (value: boolean) => void;
  handleStage: (value: string) => void;
}

export default function ForgotPasswordModal({
  handleResetPassoword,
  handleStage,
}: ForgotProps) {
  const [password, setPassword] = useState("");
  const goToNextStage = async () => {
    const email = localStorage.getItem("resetPassEmail");
    if(!email){
      return;
    }
    const response = await resetPass(email, password);

    if(response && response.hasOwnProperty('data')) {
      handleStage("success")
    }
  }
  return (
    <div
      className="w-[350px] h-fit bg-white rounded-lg p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex w-full justify-between pb-5">
        <div className="font-oswald text-xl">Write a new password</div>
        <X
          className="cursor-pointer"
          onClick={() => {
            handleResetPassoword(false);
            handleStage("forgot-password");
          }}
        />
      </div>

      <Input
        value={password}
        setValue={setPassword}
        placeholder="New password"
        Icon={Lock}
        errorText="Password should be at least 6 characters"
        isValueCorrect={password.length >=6}
      />
    <div className="mb-5"></div>
      <button
        className="w-full bg-green-900 shadow-md rounded-full h-[40px] duration-500 text-gray-300 text-xs hover:bg-green-800"
        onClick={() => goToNextStage()}
      >
        Save new password
      </button>
    </div>
  );
}
