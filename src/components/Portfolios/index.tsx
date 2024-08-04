// import { PortfolioData } from "@utils";
import { Projects } from "@data";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Container, Section } from "../ElementsComponents";
import { Title } from "../Title";

interface PortfolioTypes {
  length?: number;
  title: string;
  isPageTitle?: boolean;
}

export const Portfolios = ({ length, title, isPageTitle = false }: PortfolioTypes) => {
  return (
    <Section>
      <Container>
        <Title isPageTitle={isPageTitle} subtext="Creation" className="mb-5" text={title} />
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-10 gap-5">
          {Projects &&
            Projects?.data.map((portfolio: {
              id: any; attributes: any;
            }, index: number | null | undefined) => {
              const project = portfolio?.attributes
              return index < (length ? length : Projects?.data?.length) && (
                <Link to={`/portfolio/${portfolio.id}`} key={index} className="">
                  <div className="relative pb-[56.25%]  mb-3">
                    <img className="absolute w-full h-full left-0 top-0 object-cover" src={project?.Img_URL} alt={project?.Title} />
                  </div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg text-black font-medium">{project?.Title}</h5>
                    <p className="text-sm">
                      {project?.Platforms_Library?.map((tech: string, index: number | null | undefined) => (
                        <span key={index}>
                          {tech}
                          {!(index + 1 === project.Platforms_Library.length) && ","}{" "}
                        </span>
                      ))}
                      -- {project?.Developed_Date}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
        {length && (
          <div className="text-center mt-10">
            <Button isLink link="/portfolio">
              View All
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
};
