import { Button, Container, Footer, Header, Section, Title } from "@components";

export const AboutMe = () => {
  return (
    <>
      <Header />
      <Section noBottomSpace>
        <Container>
          <Title subtext="About Me" text="Meet Sampath" className="2xl:mb-7 mb-4" />
          <div className="flex 2xl:gap-20 gap-10 justify-between">
            <div className="lg:w-3/5">
              <div className="flex flex-col small-2xl:gap-4 gap-2 items-start">
                <p>
                  I’m Sampath, an enthusiastic front-end developer with a diverse and extensive background of over 7+ years in web development. Currently, I thrive as a Team Leader of frontend at White Orange Software, where I excel in creating engaging and user-friendly interfaces.
                </p>
                <p>
                  My adventure into development began with a spark of curiosity and has since blossomed into a rewarding career. From humble beginnings in Web designing and later I'm upgrading skill to Frontend Developer, I’ve evolved by tackling a spectrum of projects—from ERM, Finance, and other web-applications each one a chapter in my growth story.
                </p>
                <p className="mb-4">
                  At the core of my professional journey lies an unwavering passion for development and a commitment to values that shape my approach to every
                  project. It's more than just a job; it's a calling to turn ideas into extraordinary digital experiences.
                </p>
                <Button link="/contact-me">Let’s Collaborate</Button>
              </div>
            </div>
            <div className="lg:w-2/5">
              {/* <div className="flex flex-col small-2xl:gap-4 gap-2 items-start">
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black xl:text-lg text-base font-medium mb-2">User-Centric Approach</h6>
                  <p>Prioritizing user needs and preferences in every decision.</p>
                </div>
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black xl:text-lg text-base font-medium mb-2">Collaboration and Communication</h6>
                  <p>Thriving on effective teamwork and open communication.</p>
                </div>
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black xl:text-lg text-base font-medium mb-2">Continuous Learning</h6>
                  <p>Fostering a culture of continuous learning to stay at the forefront of industry trends.</p>
                </div>
              </div> */}
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
