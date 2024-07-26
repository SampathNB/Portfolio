import {ChangeEventHandler, forwardRef, ReactNode} from "react";
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

interface InputTypes {
  placeholder: string;
  icon: ReactNode;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorText?: string | undefined | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  name?: string;
  id?: string;
}

export const Input = forwardRef(({icon, onChange, placeholder, type, errorText, name, id}: InputTypes, ref) => {
  return (
    <>
      <div className="text-sm text-black">
        <div className="relative">
          <span className="absolute top-1/2 transform -translate-y-1/2 left-2">{icon}</span>
          <input
            ref={ref}
            name={name}
            id={id}
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
});
