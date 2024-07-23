import {Button, Container, Footer, Header, Section, Title} from "@components";
import {About} from "@images";

export const AboutMe = () => {
  return (
    <>
      <Header />
      <Section noBottomSpace>
        <Container>
          <Title subtext="About Me" text="Meet Sampath" className="mb-7" />
          <div className="flex gap-20 justify-between">
            <div className="w-2/5">
              <img src={About} alt="" />
            </div>
            <div className="w-3/5">
              <div className="flex flex-col gap-4 items-start">
                <p>
                  Hello! I'm Parker, a passionate creator on a mission to craft meaningful digital experiences. With a blend of creativity and technical
                  expertise, I specialize in weaving seamless journeys that leave a lasting impact.
                </p>
                <p>
                  From a young age, I found solace and inspiration in the world of design. What started as a curiosity evolved into a full-fledged passion for
                  creating experiences that resonate. I believe in the power of design to evoke emotions, tell stories, and transform the way we interact with
                  the digital realm.
                </p>
                <p className="mb-4">
                  At the core of my professional journey lies an unwavering passion for development and a commitment to values that shape my approach to every
                  project. It's more than just a job; it's a calling to turn ideas into extraordinary digital experiences.
                </p>
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black text-lg font-medium mb-2">User-Centric Approach</h6>
                  <p>Prioritizing user needs and preferences in every decision.</p>
                </div>
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black text-lg font-medium mb-2">Collaboration and Communication</h6>
                  <p>Thriving on effective teamwork and open communication.</p>
                </div>
                <div className="border-b border-gray-200 w-full pb-3">
                  <h6 className="text-black text-lg font-medium mb-2">Continuous Learning</h6>
                  <p>Fostering a culture of continuous learning to stay at the forefront of industry trends.</p>
                </div>
                <Button link="#">Let’s Collaborate</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex gap-28 justify-between">
            <div className="w-1/2">
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
            <div className="w-1/2">
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
