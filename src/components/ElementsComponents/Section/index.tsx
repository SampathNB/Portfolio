import clsx from "clsx"
import { ReactNode } from "react"

interface SectionTypes {
  className?: string,
  children: ReactNode
}

export const Section = ({ className, children }: SectionTypes) => {
  return (
    <>
      <section className={clsx('py-32', className)}>
        {children}
      </section>
    </>
  )
}