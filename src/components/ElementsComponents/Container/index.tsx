import clsx from "clsx"
import { ReactNode } from "react"

interface ContainerType {
  className?: string
  children: ReactNode
}

export const Container = ({ className, children }: ContainerType) => {
  return (
    <>
      <div className={clsx("container px-3 mx-auto", className)}>
        {children}
      </div>
    </>
  )
}