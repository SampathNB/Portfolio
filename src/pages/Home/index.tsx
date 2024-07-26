import {Button, Container, Footer, Header, Portfolios, Section, Title} from "@components";
import {About, Sampath} from "@images";
import {Icons} from "@utils";

export const Home = () => {
  const skills = ["Collaboration", "Design", "development", "Optimization", "Management", "Communication"];
  const socials = [
    {
      path: "facebook.com",
      icons: Icons.Facebook,
    },
    {
      path: "instagram.com",
      icons: Icons.Instagram,
    },
    {
      path: "linkedin.com",
      icons: Icons.LinkArrow,
    },
  ];
  return (
    <>
      <section className="relative">
        <Header isHomePage className="lg:w-1/2" />
        <Container>
          <div className="2xl:py-28 py-20 lg:w-1/2 lg:pr-16 lg:text-left text-center">
            <Title isPageTitle className="mb-6" text="Crafting Connections Your Interface Expert" />
            <p className="mb-4">
              Greetings! I'm Jenny, your dedicated Interface Artisan. Within the digital tapestry, I weave seamless experiences that transcend the ordinary.
            </p>
            <p className="mb-6">
              I specialize in understanding user behaviors, anticipating needs, and creating interfaces that not only look beautiful but intuitively respond to
              the user's every interaction.
            </p>
            <div className="flex items-center gap-4 lg:justify-start justify-center">
              <Button link="#">Hire me</Button>
              <a href="#" className="text-sm font-medium text-gray-800 flex items-center gap-1 hover:underline">
                Portfolio {Icons.LinkArrow}{" "}
              </a>
            </div>
          </div>
        </Container>
        <div className="bg-neutral-800 text-white py-8">
          <Container>
            <div className="lg:w-1/2 flex items-end gap-4 pr-4">
              <div className="w-3/4">
                <h4 className="mb-5 text-xl font-medium">Skills & Expertise</h4>
                <div className="flex flex-wrap lg:gap-2 gap-1 max-w-md">
                  {skills.map((skill: string, index: number) => {
                    return (
                      <div className="text-xs py-1.5 xl:px-4 px-3 border border-white border-opacity-15 rounded-2xl capitalize" key={index}>
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-1/4">
                <p className="text-sm mb-3">Follow me on</p>
                <div className="flex items-center gap-2">
                  {socials.map((social, index) => {
                    return (
                      <a
                        className="flex items-center justify-center border border-white border-opacity-15 p-2 w-9 h-9 rounded-full hover:bg-white hover:text-black transition-colors bg-transparent"
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
          <div className="grid lg:grid-cols-4 grid-cols-2 xl:gap-5 gap-3 text-black">
            <div className="bg-blue-200 p-4 flex flex-col xl:gap-7 gap-3">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="text-xl font-medium mb-2">Web Development</h4>
                <p className="text-sm">From concept to code, I bring designs to life for seamless online experiences.</p>
              </div>
            </div>
            <div className="bg-pink-200 p-4 flex flex-col xl:gap-7 gap-3">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="text-xl font-medium mb-2">Mobile App</h4>
                <p className="text-sm">Create intuitive and visually appealing designs for iOS and Android applications.</p>
              </div>
            </div>
            <div className="bg-green-200 p-4 flex flex-col xl:gap-7 gap-3">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="text-xl font-medium mb-2">Webflow</h4>
                <p className="text-sm">I bring innovation to user experiences by incorporating dynamic & engaging design</p>
              </div>
            </div>
            <div className="bg-purple-200 p-4 flex flex-col xl:gap-7 gap-3">
              <img src="https://cdn.prod.website-files.com/65be2b47014f55c8490dc268/65f3d3a85d2e8bd91b61bd95_garphics-01.png" alt="" />
              <div>
                <h4 className="text-xl font-medium mb-2">e-Commerce</h4>
                <p className="text-sm">I specialize in crafting captivating and user-centric e-commerce experiences</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-neutral-800 text-white 2xl:py-16 py-10 lg:text-left text-center">
        <Container>
          <div className="flex gap-12 justify-between">
            <div className="lg:w-1/2">
              <div className="flex flex-col items-start h-full justify-between">
                <div>
                  <Title isLight={false} className="pb-8" subtext="My Story" text="About Me" titleClassName="text-white" />
                  <p className="mb-5">
                    Hello! I'm Parker, a passionate creator on a mission to craft meaningful digital experiences. With a blend of creativity and technical
                    expertise, I specialize in weaving seamless journeys that leave a lasting impact.
                  </p>
                  <p className="mb-8">
                    From a young age, I found solace and inspiration in the world of design. What started as a curiosity evolved into a full-fledged passion for
                    creating experiences that resonate. I believe in the power of design to evoke emotions, tell stories, and transform the way we interact with
                    the digital realm.
                  </p>
                  <Button link="#">Let’s Collaborate</Button>
                </div>
                <div className="flex w-full mt-5 gap-5 lg:justify-start justify-center">
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
            <div className="xl:w-2/5 w-1/2 lg:block hidden">
              <img src={About} alt="" />
            </div>
          </div>
        </Container>
      </Section>
      <Portfolios title="Selected Works" length={4} />
      <Section className="bg-[#dbd2c2] 2xl:py-16 py-10">
        <Container>
          <div className="max-w-screen-sm mx-auto text-center flex flex-col gap-5 items-center">
            <Title text="Selected Explore opportunities connect for new ventures!" />
            <p className="text-black text-sm opacity-80">
              Embark on a journey of possibilities and connect with me for new ventures, where innovation meets opportunity, and together, we craft success
              stories.
            </p>
            <Button isLink link="#" isWhite>
              Get Started
            </Button>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
