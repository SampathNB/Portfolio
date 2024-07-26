import clsx from "clsx";
import {ChangeEventHandler, forwardRef, ReactNode} from "react";
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

interface TextareaTypes {
  placeholder: string;
  icon: ReactNode;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  errorText?: string | undefined | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  className?: string;
  name?: string;
  id?: string;
}

export const Textarea = forwardRef(({icon, onChange, placeholder, errorText, className, name, id}: TextareaTypes, ref) => {
  return (
    <>
      <div className={clsx("text-sm text-black", className)}>
        <div className="relative">
          <span className="absolute top-3 left-2">{icon}</span>
          <textarea
            ref={ref}
            name={name}
            id={id}
            rows={6}
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
