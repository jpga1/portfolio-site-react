import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const debianFrontend = {
    thumbnail: "./src/assets/debian-front-end-sample-image.png",
    title: "Debian Mockup Front-end",
    description:
      "A mockup webpage of Debian.org that intends to explore improvements in layout, aesthetics, user-friendliness, and minimalism.",
    url: "https://github.com/jpga1/debian-mockup-front-end",
  };

  const portfolioWebpage = {
    thumbnail: "./src/assets/portfolio-site-image.png",
    title: "Portfolio Webpage",
    description:
      "A portfolio webpage built using react and the bootstrap framework, which showcases web development oriented projects.",
    url: "https://github.com/jpga1/portfolio-site-react",
  };

  const calculator = {
    thumbnail: "./src/assets/calculator-image-sample.png",
    title: "Calculator",
    description:
      "A calculator web application that performs fundamental arthimetic functions.",
    url: "https://github.com/jpga1/calculator",
  };

  const gpaCalculator = {
    thumbnail: "./src/assets/houghton-gpa-calculator-sample-image.png",
    title: "Grade Point Average Calculator",
    description:
      "Calculates the current semester grade point average and overall grade point average based on current semester credits, cummulative credits, and cummulative grade point average data. Credit and grading schemes are based on Houghton University's standards",
    url: "https://github.com/jpga1/houghton-gpa-calculator",
  };

  return (
    <div className="container-fluid text-white text-center p-5">
      <h2 className="display-4 mb-5">Projects</h2>
      <ProjectCard {...debianFrontend} />
      <ProjectCard {...portfolioWebpage} />
      <ProjectCard {...calculator} />
      <ProjectCard {...gpaCalculator} />
    </div>
  );
}
