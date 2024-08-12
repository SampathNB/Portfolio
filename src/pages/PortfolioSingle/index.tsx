import {Button, Container, Footer, Header, Section, Title} from "@components";
import {Projects} from "@data";
import {useParams} from "react-router-dom";

export const PortfolioSingle = () => {
  const {id} = useParams();
  const data = Projects.data.find((project) => project.id == id);
  const project = data?.attributes;
  return (
    <>
      <Header />
      <Section noBottomSpace>
        <Container className="xl:max-w-screen-xl">
          <Title isPageTitle subtext="Creations" className="mb-5" text={project?.Title} />
          <div className="flex items-center justify-between mb-5">
            <div className="flex sm:gap-12 gap-5">
              <div>
                <h6 className="font-medium text-black">Develop Under</h6>
                <p className="text-sm">{project?.Client}</p>
              </div>
              <div>
                <h6 className="font-medium text-black">Platforms and Libraries</h6>
                <p className="text-sm">
                  {project?.Platforms_Library?.map((tech: string, index: number | null | undefined) => (
                    <span key={index}>
                      {tech}
                      {!(index! + 1 === project.Platforms_Library.length) && ","}{" "}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <h6 className="font-medium text-black">Year</h6>
                <p className="text-sm">{project?.Developed_Date}</p>
              </div>
            </div>
          </div>
          <div className="relative pb-[56.25%] mb-8">
            <img className="absolute w-full h-full left-0 top-0 object-cover" src={project?.Img_URL} alt={project?.Title} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="xl:max-w-screen-xl">
          <div className="flex gap-10 md:flex-row flex-col">
            <div className="md:w-2/5">
              <Title className="mb-5" text="Project Overview" />
              <div className="flex flex-col gap-1 sm:mb-4 mb-3" dangerouslySetInnerHTML={{__html: project?.Project_Overview}}></div>
            </div>
            <div className="md:w-2/5">
              <Title className="mb-5" text="What I Did" />
              <div className="flex flex-col gap-1 sm:mb-4 mb-3 list" dangerouslySetInnerHTML={{__html: project?.What_I_Did}}></div>
              <Button target="_blank" link={project?.URL}>
                Visit Website
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
