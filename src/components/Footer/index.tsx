import { HomeContent } from "@data";
import { Icons, pageLinks, socialLinks } from "@utils";
import { Link } from "react-router-dom";
import { Container } from "../ElementsComponents";

export const Footer = () => {
  const data = HomeContent.data.attributes;
  return (
    <>
      <footer className="bg-black sm:py-16 py-7 text-zinc-400">
        <Container>
          <div className="flex lg:gap-24 gap-10 justify-between lg:flex-nowrap flex-wrap flex-col sm:flex-row">
            <div className="lg:w-1/3 w-full">
              <h2 className="lg:text-2xl text-xl text-white mb-4 leading-normal font-medium">{data.collaboration_title}</h2>
              <p>{data.collaboration_content}</p>
            </div>
            <div className="flex sm:justify-between justify-evenly gap-4 lg:w-1/4 sm:w-2/5">
              <div>
                <h4 className="text-white mb-4 text-lg font-medium">Pages</h4>
                <div className="flex flex-col text-sm gap-2">
                  {pageLinks.map((link, index) => {
                    return (
                      <Link key={index} to={link.link} className="hover:text-white transition-colors capitalize">
                        {link.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="text-white mb-4 text-lg font-medium">Follow me</h4>
                <div className="flex flex-col text-sm gap-2">
                  {socialLinks.map((social, index) => {
                    return (
                      <a className="hover:text-white transition-colors capitalize" target="_blank" key={index} href={social.path}>
                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-2/5">
              <div className="border-b border-white border-opacity-50 pb-6 mb-6">
                <h4 className="text-white mb-2 font-medium">Let’s have a chat</h4>
                <Link to="/contact-me" className="flex items-center gap-4 text-sm hover:text-white transition-colors">
                  Let's discuss <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">{Icons.LinkArrow}</span>
                </Link>
              </div>
              <div>
                <h4 className="text-white mb-2 font-medium">Let’s work started</h4>
                <Link to="/contact-me" className="flex items-center gap-4 text-sm hover:text-white transition-colors">
                  Got Ideas to Share? <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">{Icons.LinkArrow}</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
