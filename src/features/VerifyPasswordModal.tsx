import React, { useEffect, useRef, useState } from "react";
import { X } from "react-feather";
import { sendVerificationCodeAgain, verifySentCode } from "../services/auth/userService";

interface ForgotProps {
  handleResetPassoword: (value: boolean) => void;
  handleStage: (value: string) => void;
}

export default function VerifyPasswordModal({
  handleResetPassoword,
  handleStage,
}: ForgotProps) {
  const [time, setTime] = useState(20);
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);

  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [num3, setNum3] = useState<string>("");
  const [num4, setNum4] = useState<string>("");

  const startTimer = () => {
    const countDown = () => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          if (timerId.current) {
            clearInterval(timerId.current);
          }
          return 0;
        }
      });
    };

    timerId.current = setInterval(countDown, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  useEffect(() => {
    ref1.current?.focus();
  }, []);

  const handleResendPassword = async () => {
    const email = localStorage.getItem('resetPassEmail');
    if(!email){
      return;
    }
    await sendVerificationCodeAgain(email);
    setTime(20);
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    startTimer();
  };

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNum1(value);

    if (value && ref2.current) {
      ref2.current?.focus();
    }
  };

  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNum2(value);

    if (value && ref3.current) {
      ref3.current.focus();
    }
  };

  const handleInput3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =e.target.value;
    setNum3(value);

    if (value && ref4.current) {
      ref4.current.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    currentRef: React.RefObject<HTMLInputElement>,
    previousRef: React.RefObject<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && currentRef.current?.value === "") {
      previousRef.current?.focus();
    }
  };

  const verifyCode = async () =>{
    const verificationString = `${num1}${num2}${num3}${num4}`;
    const email = localStorage.getItem("resetPassEmail");
    
    if(!email){
      return;
    }

    const response = await verifySentCode(email, verificationString);
    return response;
  }

  const goToNextStage = async () => {
    const response = await verifyCode();

    if (response && response.hasOwnProperty('data')) {
      handleStage("forgot-password");
    }
  }

  const isDisabledButton = num1!=="" && num2!=="" && num3!=="" && num4!=="";
  

  return (
    <div
      className="w-[350px] h-fit bg-white rounded-lg p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex w-full justify-between pb-5">
        <div className="font-oswald text-xl">Verification Code</div>
        <X
          className="cursor-pointer"
          onClick={() => {
            handleResetPassoword(false);
            handleStage("forgot-password");
          }}
        />
      </div>

      <div className="flex gap-2 justify-between mb-3">
        <input
          ref={ref1}
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
          className="w-[70px] rounded-md h-[70px] border border-gray-300 p-7"
          maxLength={1}
          value={num1}
          onChange={(e) => handleInput1Change(e)}
          onKeyDown={(e) => handleKeyDown(e, ref1, ref1)}
        />
        <input
          ref={ref2}
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
          className="w-[70px] rounded-md h-[70px] border border-gray-300 p-7"
          maxLength={1}
          value={num2}
          onChange={(e) => handleInput2Change(e)}
          onKeyDown={(e) => handleKeyDown(e, ref2, ref1)}
        />
        <input
          ref={ref3}
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
          className="w-[70px] rounded-md h-[70px] border border-gray-300 p-7"
          maxLength={1}
          value={num3}
          onChange={(e) => handleInput3Change(e)}
          onKeyDown={(e) => handleKeyDown(e, ref3, ref2)}
        />
        <input
          ref={ref4}
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
          className="w-[70px] rounded-md h-[70px] border border-gray-300 p-7"
          maxLength={1}
          value={num4}
          onChange={(e) =>
            setNum4(e.target.value ? e.target.value : "")
          }
          onKeyDown={(e) => handleKeyDown(e, ref4, ref3)}
        />
      </div>

      <div className="flex flex-col mb-4 gap-[5px]">
        <div className="flex items-center gap-[5px]">
          {time === 0 ? (
            <div
              className="text-gray-600 text-sm border-b border-gray-600 cursor-pointer"
              onClick={handleResendPassword}
            >
              Resend
            </div>
          ) : null}
          {time !== 0 ? (
            <div className="text-gray-500 text-sm">Send code again:</div>
          ) : null}
          <div className="text-blue-600 text-sm">
            00:{time < 10 ? `0${time}` : time}
          </div>
        </div>
      </div>

      <button
        className="w-full bg-green-900 shadow-md rounded-full h-[40px] duration-500 text-gray-300 text-xs hover:bg-green-800"
        onClick={() => goToNextStage()}
        disabled={!isDisabledButton}
      >
        Verify
      </button>
    </div>
  );
}
