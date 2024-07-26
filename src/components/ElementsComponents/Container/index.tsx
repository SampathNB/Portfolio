import clsx from "clsx";
import {ReactNode} from "react";

interface ContainerType {
  className?: string;
  children: ReactNode;
}

export const Container = ({className, children}: ContainerType) => {
  return (
    <>
      <div className={clsx("container lg:px-3 md:px-20 px-3 mx-auto", className)}>{children}</div>
    </>
  );
};
