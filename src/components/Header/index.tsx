import { pageLinks } from "@utils";
import clsx from "clsx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button";
import { Container } from "../ElementsComponents";

interface HeaderTypes {
  className?: string;
  isHomePage?: boolean;
}

export const Header = ({ className, isHomePage = false }: HeaderTypes) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const barClassName = "block bg-gray-600 w-5 h-[1px] transition transition-transform transition-opacity transform ease-in";

  return (
    <>
      <header className={"py-3 border-b border-gray-200"}>
        <Container>
          <div className={clsx("flex items-center justify-between", className)}>
            <Link to="/" className="text-2xl text-black font-bold">
              SAMPATH BINGI
            </Link>
            <div className="px-4 flex items-center gap-4">
              {!isHomePage && <Button link="#">Let's Talk</Button>}
              <div>
                <button
                  className="rounded-3xl border border-black flex flex-col gap-[5px] w-14 h-9 items-center justify-center"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span className={clsx(barClassName, showMenu ? "rotate-45 translate-y-1.5" : "rotate-0")}></span>
                  <span className={clsx(barClassName, showMenu ? "opacity-0" : "opacity-100")}></span>
                  <span className={clsx(barClassName, showMenu ? "-rotate-45 -translate-y-1.5" : "rotate-0")}></span>
                </button>
                {showMenu && (
                  <div className="relative w-full">
                    <div className="absolute border border-gray-300 p-3 right-0 top-3 flex flex-col text-sm bg-white rounded-lg shadow-xl w-60 text-center font-medium">
                      <div className="flex flex-col text-center gap-3 border-b border-gray-200 pb-3 mb-3">
                        {pageLinks.map((link, index) => {
                          return (
                            <NavLink className="capitalize hover:text-black transition-colors" key={index} to={link.link}>
                              {link.text}
                            </NavLink>
                          );
                        })}
                      </div>
                      <a href="mailto:bingisampat@gmail.com" className="hover:text-black transition-colors">
                        bingisampat@gmail.com
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
