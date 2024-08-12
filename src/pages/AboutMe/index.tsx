import {Button, Container, Footer, Header, Section, Title} from "@components";

export const AboutMe = () => {
  const TechSkills = ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "Redux", "Redux Toolkit"];
  const HardSkills = ["Manage and Plan", "Frontend Design with development", "Uses of plugins", "Fluid Design", "Knowledge with Browser friendly"];
  const SoftSkills = ["Leadership", "Problem Solving", "Management", "Effective Communication", "Creativity", "Willingness to learn"];
  return (
    <>
      <Header />
      <Section noBottomSpace>
        <Container>
          <Title subtext="About Me" text="Meet Sampath" className="2xl:mb-7 mb-4" />
          <div className="flex gap-10 justify-between flex-col lg:flex-row">
            <div className="lg:w-3/5">
              <div className="flex flex-col small-2xl:gap-4 gap-2 items-start">
                <p>
                  I’m Sampath, an enthusiastic front-end developer with a diverse and extensive background of over 7+ years in web development. Currently, I
                  thrive as a Team Leader of frontend at White Orange Software, where I excel in creating engaging and user-friendly interfaces.
                </p>
                <p>
                  My adventure into development began with a spark of curiosity and has since blossomed into a rewarding career. From humble beginnings in Web
                  designing and later I'm upgrading skill to Frontend Developer, I’ve evolved by tackling a spectrum of projects—from ERM, Finance, and other
                  web-applications each one a chapter in my growth story.
                </p>
                <p className="mb-4">
                  At the core of my professional journey lies an unwavering passion for development and a commitment to values that shape my approach to every
                  project. It's more than just a job; it's a calling to turn ideas into extraordinary digital experiences.
                </p>
                <Button link="/contact-me">Let’s Collaborate</Button>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="flex flex-col small-2xl:gap-4 gap-2 items-start">
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black xl:text-lg text-base font-medium mb-2">Technical Skills & Expertise</h6>
                  <div className="flex flex-wrap lg:gap-2 gap-1">
                    {TechSkills.map((skill: string, index: number) => {
                      return (
                        <div className="text-xs py-1.5 xl:px-4 px-3 border border-gray-800 border-opacity-15 rounded-2xl capitalize" key={index}>
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black xl:text-lg text-base font-medium mb-2">Hard Skills</h6>
                  <div className="flex flex-wrap lg:gap-2 gap-1">
                    {HardSkills.map((skill: string, index: number) => {
                      return (
                        <div className="text-xs py-1.5 xl:px-4 px-3 border border-gray-800 border-opacity-15 rounded-2xl capitalize" key={index}>
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black xl:text-lg text-base font-medium mb-2">Soft Skills</h6>
                  <div className="flex flex-wrap lg:gap-2 gap-1">
                    {SoftSkills.map((skill: string, index: number) => {
                      return (
                        <div className="text-xs py-1.5 xl:px-4 px-3 border border-gray-800 border-opacity-15 rounded-2xl capitalize" key={index}>
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex 2xl:gap-28 lg:gap-16 gap-5 justify-between lg:flex-row flex-col">
            <div className="lg:w-1/2">
              <Title subtext="My Story" text="My Experience" className="mb-4" />
              <p className="mb-5">
                I have gained valuable insights and expertise in Product Developer. I have had the opportunity to work on a wide range of projects
              </p>
              <table className="table-fixed border-separate border-spacing-y-5 text-black w-full">
                <tbody>
                  <tr>
                    <td width="30%">
                      <div className="flex items-center gap-2">
                        <span>2021</span>
                        <span className="h-[1px] w-3 bg-current opacity-50"></span>
                        <span>Present</span>
                      </div>
                    </td>
                    <td>Frontend Team Leader</td>
                    <td className="text-right">White Orange Software</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200" colSpan={3}></td>
                  </tr>
                  <tr>
                    <td width="30%">
                      <div className="flex items-center gap-2">
                        <span>2017</span>
                        <span className="h-[1px] w-3 bg-current opacity-50"></span>
                        <span>2020</span>
                      </div>
                    </td>
                    <td>Web Designer</td>
                    <td className="text-right">Toshal Infotech</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200" colSpan={3}></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lg:w-1/2">
              <Title subtext="My Study" text="My Education" className="mb-4" />
              <p className="mb-5">
                I have gained valuable insights and expertise in Product Developer. I have had the opportunity to work on a wide range of projects
              </p>
              <table className="table-fixed border-separate border-spacing-y-5 text-black w-full">
                <tbody>
                  <tr>
                    <td width="30%">
                      <div className="flex items-center gap-2">
                        <span>2013</span>
                        <span className="h-[1px] w-3 bg-current opacity-50"></span>
                        <span>2017</span>
                      </div>
                    </td>
                    <td>Engg of Computer & Science</td>
                    <td className="text-right">Vidhyadeep, Kim, Gujarat</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200" colSpan={3}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
