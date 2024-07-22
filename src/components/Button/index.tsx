import clsx from "clsx";
import {ReactNode} from "react";

interface ButtonTypes {
  children: ReactNode;
  isLink?: boolean;
  link?: string;
  isWhite?: boolean;
}

export const Button = ({children, isLink = true, link, isWhite = false}: ButtonTypes) => {
  const classNames = "text-sm font-medium p-2 px-6 rounded-3xl border transition-colors hover:bg-transparent";
  const variants = isWhite ? "bg-white border-white hover:text-white" : "bg-primary text-white border-primary hover:text-primary";
  return (
    <>
      {isLink ? (
        <a href={link} className={clsx(classNames, variants)}>
          {children}
        </a>
      ) : (
        <button className={classNames}>{children}</button>
      )}
    </>
  );
};