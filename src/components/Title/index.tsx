import clsx from "clsx";

interface TitleTypes {
  isPageTitle?: boolean;
  isLight?: boolean;
  subtext?: string;
  text: string;
  subtextClassName?: string,
  titleClassName?: string;
  className?: string;
}

export const Title = ({ isPageTitle = false, subtext, text, subtextClassName, titleClassName, className, isLight = true }: TitleTypes) => {
  const classNames = "text-black  font-medium leading-snug"
  return (
    <>
      <div className={clsx(className)}>
        {subtext && <div className={clsx(subtextClassName, "text-sm py-1 px-4 border border-opacity-15 rounded-2xl inline-block mb-1", isLight ? "border-black" : "border-white")}>{subtext}</div>}
        {isPageTitle
          ? <h1 className={clsx(titleClassName, classNames, "text-5xl")}>{text}</h1>
          : <h2 className={clsx(titleClassName, classNames, "text-4xl")}>{text}</h2>}
      </div>
    </>
  )
}