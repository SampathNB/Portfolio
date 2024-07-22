import clsx from "clsx";
import {ReactNode} from "react";

interface SectionTypes {
  className?: string;
  children: ReactNode;
  noBottomSpace?: boolean;
}

export const Section = ({className, children, noBottomSpace = false}: SectionTypes) => {
  return (
    <>
      <section className={clsx(className ? className : noBottomSpace ? "py-16 pb-0" : "py-16")}>{children}</section>
    </>
  );
};
