import {Button, Container, Footer, Header, Portfolios, Section, Title} from "@components";
import {Sampath} from "@images";
import {Icons, socialLinks} from "@utils";
import {Link} from "react-router-dom";

export const Home = () => {
  const skills = ["Communication", "Collaboration", "Design", "development", "Optimization", "Management"];
  return (
    <>
      <section className="relative">
        <Header isHomePage className="lg:w-1/2" />
        <Container>
          <div className="2xl:py-28 sm:py-20 py-10 lg:w-1/2 lg:pr-16 lg:text-left text-center">
            <Title isPageTitle className="sm:mb-6 mb-4" text="Crafting Connections Your Interface Expert" />
            <p className="sm:mb-4 mb-3">
              Greetings! I'm Jenny, your dedicated Interface Artisan. Within the digital tapestry, I weave seamless experiences that transcend the ordinary.
            </p>
            <p className="sm:mb-6 mb-3">
              I specialize in understanding user behaviors, anticipating needs, and creating interfaces that not only look beautiful but intuitively respond to
              the user's every interaction.
            </p>
            <div className="flex items-center gap-4 lg:justify-start justify-center">
              <Button link="/contact-me">Hire me</Button>
              <Link to="/portfolio" className="text-sm font-medium text-gray-800 flex items-center gap-1 hover:underline">
                Portfolio {Icons.LinkArrow}
              </Link>
            </div>
          </div>
        </Container>
        <div className="bg-neutral-800 text-white py-8 md:text-left text-center">
          <Container>
            <div className="lg:w-1/2 flex items-end gap-4 lg:pr-4 md:flex-row flex-col">
              <div className="md:w-3/4 w-full">
                <h4 className="mb-5 text-xl font-medium">Skills & Expertise</h4>
                <div className="flex flex-wrap lg:gap-2 gap-1 md:max-w-md md:justify-start justify-center">
                  {skills.map((skill: string, index: number) => {
                    return (
                      <div className="text-xs py-1.5 xl:px-4 px-3 border border-white border-opacity-15 rounded-2xl capitalize" key={index}>
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:w-1/4 w-full">
                <p className="text-sm mb-3">Follow me on</p>
                <div className="flex items-center gap-2 md:justify-start justify-center">
                  {socialLinks.map((social, index) => {
                    return (
                      <a
                        className="flex items-center justify-center border border-white border-opacity-15 p-1 w-9 h-9 rounded-full hover:bg-white hover:text-black transition-colors bg-transparent ease-in-out"
                        target="_blank"
                        key={index}
                        href={social.path}
                      >
                        {social.icons}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-[#dbd2c2] absolute top-0 right-0 w-1/2 h-full lg:flex hidden items-end justify-center">
          <img src={Sampath} alt="" className="w-auto h-[90%]" />
        </div>
      </section>
      <Section>
        <Container>
          <Title className="mb-5" subtextClassName="border-black" subtext="Exprtise" text="What I Do" />
          <div className="grid lg:grid-cols-4 ms:grid-cols-2 grid-cols-1 xl:gap-5 gap-3 text-black">
            <div className="bg-blue-200 sm:p-4 p-2 flex flex-col xl:gap-7 sm:gap-3 gap-2">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="sm:text-xl text-lg font-medium sm:mb-2 mb-1">Web Development</h4>
                <p className="text-sm">From concept to code, I bring designs to life for seamless online experiences.</p>
              </div>
            </div>
            <div className="bg-pink-200 sm:p-4 p-2 flex flex-col xl:gap-7 sm:gap-3 gap-2">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="sm:text-xl text-lg font-medium sm:mb-2 mb-1">Mobile App</h4>
                <p className="text-sm">Create intuitive and visually appealing designs for iOS and Android applications.</p>
              </div>
            </div>
            <div className="bg-green-200 sm:p-4 p-2 flex flex-col xl:gap-7 sm:gap-3 gap-2">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="sm:text-xl text-lg font-medium sm:mb-2 mb-1">Webflow</h4>
                <p className="text-sm">I bring innovation to user experiences by incorporating dynamic & engaging design</p>
              </div>
            </div>
            <div className="bg-purple-200 sm:p-4 p-2 flex flex-col xl:gap-7 sm:gap-3 gap-2">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="sm:text-xl text-lg font-medium sm:mb-2 mb-1">e-Commerce</h4>
                <p className="text-sm">I specialize in crafting captivating and user-centric e-commerce experiences</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-neutral-800 text-white 2xl:py-16 lg:py-10 py-7 lg:text-left text-center">
        <Container>
          <div className="flex sm:gap-12 gap-6 justify-between items-end lg:flex-row flex-col">
            <div className="lg:w-1/2">
              <div className="flex flex-col items-start h-full justify-between">
                <div>
                  <Title isLight={false} className="sm:pb-8 pb-5" subtext="My Story" text="About Me" titleClassName="text-white" />
                  <p className="sm:mb-5 mb-3">
                    Hello! I'm Parker, a passionate creator on a mission to craft meaningful digital experiences. With a blend of creativity and technical
                    expertise, I specialize in weaving seamless journeys that leave a lasting impact.
                  </p>
                  <p className="sm:mb-8 mb-4">
                    From a young age, I found solace and inspiration in the world of design. What started as a curiosity evolved into a full-fledged passion for
                    creating experiences that resonate. I believe in the power of design to evoke emotions, tell stories, and transform the way we interact with
                    the digital realm.
                  </p>
                  <Button link="#">Let’s Collaborate</Button>
                </div>
              </div>
            </div>
            <div className="xl:w-2/5 lg:w-1/2 w-full">
              <div className="flex w-full gap-5 lg:justify-start justify-center">
                <div className="lg:w-1/3">
                  <span className="lg:text-6xl text-4xl font-light block mb-3">08+</span>
                  <p>Years of Experience</p>
                </div>
                <div className="lg:w-1/3">
                  <span className="lg:text-6xl text-4xl font-light block mb-3">28+</span>
                  <p>Projects completed</p>
                </div>
                <div className="lg:w-1/3">
                  <span className="lg:text-6xl text-4xl font-light block mb-3">25+</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Portfolios title="Selected Works" length={4} />
      <Section className="bg-[#dbd2c2] 2xl:py-16 lg:py-10 py-7">
        <Container>
          <div className="max-w-screen-sm mx-auto text-center flex flex-col sm:gap-5 gap-3 items-center">
            <Title text="Selected Explore opportunities connect for new ventures!" />
            <p className="text-black text-sm opacity-80">
              Embark on a journey of possibilities and connect with me for new ventures, where innovation meets opportunity, and together, we craft success
              stories.
            </p>
            <Button isLink link="/contact-me" isWhite>
              Get Started
            </Button>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
