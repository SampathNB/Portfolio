import {Icons, pageLinks} from "@utils";
import {NavLink} from "react-router-dom";
import {Container} from "../ElementsComponents";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black py-16 text-zinc-400 ">
        <Container>
          <div className="flex gap-24 justify-between lg:flex-nowrap flex-wrap">
            <div className="lg:w-1/3 w-full">
              <h2 className="text-2xl text-white mb-4 leading-normal font-medium">In Collaboration Harmony Whenever, Wherever, Our Work Unites</h2>
              <p>
                From career opportunities to freelance collaborations, design guidance, or a simple hello — our doors are open. Let's connect and explore
                endless possibilities together.
              </p>
            </div>
            <div className="flex gap-4 lg:w-1/4 w-2/5 justify-between">
              <div>
                <h4 className="text-white mb-4 text-lg font-medium">Pages</h4>
                <div className="flex flex-col text-sm gap-2">
                  {pageLinks.map((link, index) => {
                    return (
                      <NavLink key={index} to={link.link} className="hover:text-white transition-colors capitalize">
                        {link.text}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-white mb-4 text-lg font-medium">Follow me</h4>
                <div className="flex flex-col text-sm gap-2">
                  <a href="#">Youtube</a>
                  <a href="#">Instagram</a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 w-2/5">
              <div className="border-b border-white pb-6 mb-6">
                <h4 className="text-white mb-2 font-medium">Let’s have a chat</h4>
                <a href="#" className="flex items-center gap-4 text-sm hover:text-white transition-colors">
                  Let's discuss <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">{Icons.LinkArrow}</span>
                </a>
              </div>
              <div>
                <h4 className="text-white mb-2 font-medium">Let’s work started</h4>
                <a href="#" className="flex items-center gap-4 text-sm hover:text-white transition-colors">
                  Got Ideas to Share? <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">{Icons.LinkArrow}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
