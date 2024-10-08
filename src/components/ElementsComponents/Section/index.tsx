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
      <section className={clsx(className ? className : noBottomSpace ? "2xl:pt-16 lg:pt-10 pt-7 pb-0" : "2xl:py-16 lg:py-10 py-7")}>{children}</section>
    </>
  );
};
