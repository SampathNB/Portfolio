import clsx from "clsx";
import {ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

interface ButtonTypes {
  children: ReactNode;
  isLink?: boolean;
  link?: LinkProps | string | undefined;
  isWhite?: boolean;
  btnType?: "button" | "submit" | "reset";
}

export const Button = ({children, isLink = true, link, btnType, isWhite = false}: ButtonTypes) => {
  const classNames = "text-sm font-medium p-2 px-6 rounded-3xl border transition-colors hover:bg-transparent inline-flex";
  const variants = isWhite ? "bg-white border-white hover:text-white" : "bg-primary text-white border-primary hover:text-primary";
  return (
    <>
      {isLink ? (
        <Link to={link} className={clsx(classNames, variants)}>
          {children}
        </Link>
      ) : (
        <button type={btnType} className={classNames}>
          {children}
        </button>
      )}
    </>
  );
};
