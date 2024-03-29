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

  const todoListApp = {
    thumbnail: "./src/assets/to-do-app-image.png",
    title: "To-do List App",
    description:
      "A to-do list application implemented using react and bootstrap.",
    url: "https://github.com/jpga1/to-do-list-app",
  };

  const calculator = {
    thumbnail: "./src/assets/calculator-react-image.png",
    title: "Calculator",
    description:
      "A calculator web application, built with react, which performs fundamental arthimetic functions.",
    url: "https://github.com/jpga1/calculator-react",
  };

  const gpaCalculator = {
    thumbnail: "./src/assets/houghton-gpa-calculator-sample-image.png",
    title:
      "Volunteer Project for Houghton University: Grade Point Average Calculator",
    description:
      "A grade point average calculator, compatible with Houghton University's grading scheme.",
    url: "https://github.com/jpga1/houghton-gpa-calculator",
  };

  return (
    <div className="container-fluid text-white text-center p-5">
      <h2 className="display-4 mb-5">Projects</h2>
      <ProjectCard {...debianFrontend} />
      <ProjectCard {...portfolioWebpage} />
      <ProjectCard {...todoListApp} />
      <ProjectCard {...calculator} />
      <ProjectCard {...gpaCalculator} />
    </div>
  );
}
