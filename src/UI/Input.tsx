import React from "react";

interface EmailInputProps {
    value: string;
    setValue: (item: string) => void;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    placeholder: string,
    errorText?: string,
    isValueCorrect?: boolean,
}

export default function Input({Icon, value, setValue, placeholder, errorText, isValueCorrect}: EmailInputProps) {
  return (
    <div className="w-full relative">
      <input style={value!=="" && !isValueCorrect?{border: '1px solid #D30A0A'}:{}} value={value} onChange={(e)=>setValue(e.target.value)} className="w-full outline-none h-[40px] rounded-full px-11 shadow-sm text-xs text-gray-600 border border-gray-300 focus:border-blue-400 hover:blue-300" />
      <Icon className="absolute top-[15px] left-[25px] h-[12px] w-[12px] stroke-[#D0D0D0]"/>
      {value===""?<span className="absolute top-[13px] left-[45px] text-xs text-[#D0D0D0] pointer-events-none">
        {placeholder}
      </span>:null}

      {value!=="" && !isValueCorrect?<div className="text-xs font-medium ml-5 mt-3 text-red-600">{errorText}</div>:null}
    </div>
  );
}
