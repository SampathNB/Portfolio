import {PortfolioData} from "@utils";
import {Button} from "../Button";
import {Container, Section} from "../ElementsComponents";
import {Title} from "../Title";

interface PortfolioTypes {
  length?: number;
  title: string;
  isPageTitle?: boolean;
}

export const Portfolios = ({length, title, isPageTitle = false}: PortfolioTypes) => {
  return (
    <Section>
      <Container>
        <Title isPageTitle={isPageTitle} subtext="Creation" className="mb-5" text={title} />
        <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-10 gap-5">
          {PortfolioData &&
            PortfolioData.map((portfolio, index) => {
              return (
                index < (length ? length : PortfolioData.length) && (
                  <div key={index} className="">
                    <div className="relative pb-[56.25%]  mb-3">
                      <img className="absolute w-full h-full left-0 top-0 object-cover" src={portfolio.img} alt={portfolio.name} />
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-lg text-black font-medium">{portfolio.name}</h5>
                      <p className="text-sm">
                        {portfolio.techs.map((tech, index) => (
                          <span key={index}>
                            {tech}
                            {!(index + 1 === portfolio.techs.length) && ","}{" "}
                          </span>
                        ))}
                        -- {portfolio.year}
                      </p>
                    </div>
                  </div>
                )
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
