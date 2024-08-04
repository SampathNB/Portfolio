import clsx from "clsx";

interface TitleTypes {
  isPageTitle?: boolean;
  isLight?: boolean;
  subtext?: string;
  text: string | undefined;
  subtextClassName?: string;
  titleClassName?: string;
  className?: string;
}

export const Title = ({ isPageTitle = false, subtext, text, subtextClassName, titleClassName, className, isLight = true }: TitleTypes) => {
  const classNames = "text-black font-medium 2xl:leading-snug leading-tight";
  return (
    <>
      <div className={clsx(className)}>
        {subtext && (
          <div
            className={clsx(
              subtextClassName,
              "lg:text-sm text-xs py-1 lg:px-4 px-3 border border-opacity-15 rounded-2xl inline-block mb-1",
              isLight ? "border-black" : "border-white"
            )}
          >
            {subtext}
          </div>
        )}
        {isPageTitle ? (
          <h1 className={clsx(titleClassName, classNames, "2xl:text-5xl lg:text-[40px] text-3xl")}>{text}</h1>
        ) : (
          <h2 className={clsx(titleClassName, classNames, "2xl:text-4xl lg:text-[30px] sm:text-3xl text-2xl")}>{text}</h2>
        )}
      </div>
    </>
  );
};
