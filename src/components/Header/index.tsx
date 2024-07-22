import { pageLinks } from "@utils";
import clsx from "clsx";
import { useState } from "react";
import { Container } from "../ElementsComponents";

interface HeaderTypes {
  className?: string;
  onHomePage?: boolean;
}

export const Header = ({ className, onHomePage = false }: HeaderTypes) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const barClassName = "block bg-black w-5 h-[1px] opacity-60";

  return (
    <>
      <header className={"py-3 border border-gray-200"}>
        <Container>
          <div className={clsx("flex items-center justify-between", className)}>
            <a href="/" className="text-2xl text-black font-bold">
              SAMPATH BINGI
            </a>
            <div className="px-4 relative">
              <button
                className="rounded-3xl border border-black flex flex-col gap-[5px] w-14 h-9 items-center justify-center"
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className={barClassName}></span>
                <span className={barClassName}></span>
                <span className={barClassName}></span>
              </button>
              {showMenu && <div className="relative w-full">
                <div className="absolute border border-gray-200 p-3 right-0 top-3 flex flex-col text-sm">
                  <div className="flex flex-col text-center gap-2 border-b border-gray-200 pb-2 mb-2">
                    {pageLinks.map((link, index) => {
                      return (
                        <a className="whitespace-nowrap hover:text-black transition-colors" key={index} href={link.link}>{link.text}</a>
                      )
                    })}
                  </div>
                  <a href="mailto:bingisampat@gmail.com" className="hover:text-black transition-colors">bingisampat@gmail.com</a>
                </div>
              </div>}
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
