import React, { useEffect, useState } from "react";
import { User, Lock, Globe, Book, BookOpen } from "react-feather";
import Input from "../UI/Input";
import { Link, useNavigate } from "react-router-dom";
import { registerCompany, registerWorker } from "../services/auth/authService";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [choosenRole, setChoosenRole] = useState("worker");

  const handleRegisterUser = async () => {
    let response;
    if (choosenRole === "company") {
      response = await registerCompany(companyName, email, password);
    } else if (choosenRole === "worker") {
      response = await registerWorker(firstName, lastName, email, password);
    }

    if (response) {
      navigate("/messaging");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    setEmailError(!validateEmail(email) && email !== "");
  }, [email]);

  useEffect(() => {
    setPasswordError(password.length < 6 && password !== "");
  }, [password]);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center gap-5 min-w-[350px] border p-7 rounded-xl shadow-lg">
        <div className="w-full flex flex-col items-center">
          <span className="font-semibold text-gray-400 text-3xl font-oswald mb-4">
            Registration
          </span>

          <div className="text-[13px] flex font-medium text-gray-400">
            <div
              className={`cursor-pointer ${
                choosenRole === "worker" ? "border-b border-gray-300" : null
              }`}
              onClick={() => setChoosenRole("worker")}
            >
              Worker
            </div>{" "}
            &nbsp; / &nbsp;
            <div
              className={`cursor-pointer ${
                choosenRole === "company" ? "border-b border-gray-300" : null
              }`}
              onClick={() => setChoosenRole("company")}
            >
              Company
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          {choosenRole === "worker" ? (
            <div className="flex flex-col gap-3">
              <Input
                value={firstName}
                setValue={setFirstName}
                Icon={Book}
                placeholder="First Name"
                isValueCorrect={true}
              />
              <Input
                value={lastName}
                setValue={setLastName}
                placeholder="Last Name"
                Icon={BookOpen}
                isValueCorrect={true}
              />
            </div>
          ) : null}

          {choosenRole === "company" ? (
            <Input
              value={companyName}
              setValue={setCompanyName}
              Icon={Globe}
              placeholder="Company name"
              isValueCorrect={true}
            />
          ) : null}
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
        </div>

        <button
          onClick={() => handleRegisterUser()}
          className="w-full bg-green-700 shadow-md rounded-full h-[40px] duration-500 text-gray-300 text-sm hover:bg-green-800"
        >
          Sign up
        </button>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-[6px]">
            <span className="text-xs text-gray-400 cursor-pointer font-medium">
              Already have an account?
            </span>
            <Link
              to="/"
              className="text-xs text-green-600 cursor-pointer font-medium border-b border-green-600"
            >
              <div>Sign in</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
