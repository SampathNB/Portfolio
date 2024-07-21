import clsx from "clsx"
import { ReactNode } from "react"

interface SectionTypes {
  className?: string,
  children: ReactNode,
  noBottomSpace?: boolean,
}

export const Section = ({ className, children, noBottomSpace = false }: SectionTypes) => {
  return (
    <>
      <section className={clsx(className ? className : noBottomSpace ? 'py-32 pb-0' : 'py-32')}>
        {children}
      </section>
    </>
  )
}