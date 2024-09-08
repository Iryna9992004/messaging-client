import React from 'react'
import { X, CheckCircle } from 'react-feather';

interface ForgotProps {
    handleResetPassoword: (value: boolean) => void;
    handleStage: (value:string)=>void;
}

export default function SuccessModal({ handleResetPassoword , handleStage}: ForgotProps) {
  return (
    <div
      className="w-[350px] h-fit bg-white rounded-lg p-5 flex flex-col items-center" 
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex w-full justify-between pb-5">
        <div className="font-oswald text-xl">Password changed</div>
        <X
          className="cursor-pointer"
          onClick={() => {
            handleResetPassoword(false);
            handleStage("forgot-password");
          }}
        />
      </div>

      <CheckCircle className='w-[50px] h-[50px] mb-5 stroke-green-600'/>
      <button
        className="w-full bg-green-900 shadow-md rounded-full h-[40px] duration-500 text-gray-300 text-xs hover:bg-green-800"
        onClick={() => handleResetPassoword(false)}
      >
        Back to Sign In
      </button>
    </div>
  )
}
