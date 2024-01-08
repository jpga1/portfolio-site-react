import ProjectCard from "./ProjectCard.jsx";
import debianFrontendImage from "./assets/debian-front-end-sample-image.png";
import videoSharingWebpageImage from "./assets/generic-video-sharing-webpage-image-sample.png";
import calculatorProjectImage from "./assets/calculator-image-sample.png";
import gpaCalculatorImage from "./assets/houghton-gpa-calculator-sample-image.png";

export default function Projects() {
  const debianFrontend = {
    thumbnail: debianFrontendImage,
    title: "Debian Mockup Front-end",
    description:
      "A mockup webpage of Debian.org that intends to explore improvements in layout, aesthetics, user-friendliness, and minimalism.",
    url: "https://github.com/jpga1/debian-mockup-front-end",
  };

  const videoSharingWebpage = {
    thumbnail: videoSharingWebpageImage,
    title: "Video Sharing Front-end",
    description:
      "A generic video sharing webpage, inspired by youtube.com, that explores bootstrap 4 technologies.",
    url: "https://github.com/jpga1/video-sharing-webpage",
  };

  const calculator = {
    thumbnail: calculatorProjectImage,
    title: "Calculator",
    description:
      "A calculator web application that performs fundamental arthimetic functions.",
    url: "https://github.com/jpga1/calculator",
  };

  const gpaCalculator = {
    thumbnail: gpaCalculatorImage,
    title: "Grade Point Average Calculator",
    description:
      "Calculates the current semester grade point average and overall grade point average based on current semester credits, cummulative credits, and cummulative grade point average data. Credit and grading schemes are based on Houghton University's standards",
    url: "https://github.com/jpga1/houghton-gpa-calculator",
  };

  return (
    <div className="container-fluid text-white text-center p-5">
      <h2 className="display-4 mb-5">Projects</h2>
      <ProjectCard {...debianFrontend} />
      <ProjectCard {...videoSharingWebpage} />
      <ProjectCard {...calculator} />
      <ProjectCard {...gpaCalculator} />
    </div>
  );
}
