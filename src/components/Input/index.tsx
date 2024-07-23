import {ChangeEventHandler, ReactNode} from "react";

interface InputTypes {
  placeholder: string;
  icon: ReactNode;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorText?: string;
}

export const Input = ({icon, onChange, placeholder, type, errorText}: InputTypes) => {
  return (
    <>
      <div className="text-sm text-black">
        <div className="relative">
          <span className="absolute top-1/2 transform -translate-y-1/2 left-2">{icon}</span>
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="border-b border-gray-200 w-full pl-10 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-black"
          />
        </div>
        {errorText && <p className="text-red-600  mt-1 font-medium">{errorText}</p>}
      </div>
    </>
  );
};
