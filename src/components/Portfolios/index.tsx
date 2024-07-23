import {PortfolioData} from "@utils";
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
        <div className="grid grid-cols-2 gap-10">
          {PortfolioData &&
            PortfolioData.map((portfolio, index) => {
              return (
                index < (length ? length : PortfolioData.length) && (
                  <div key={index} className="">
                    <img className="aspect-video object-cover mb-3" src={portfolio.img} alt={portfolio.name} />
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
      </Container>
    </Section>
  );
};
