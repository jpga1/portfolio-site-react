export default function ProjectCard({ thumbnail, title, description, url }) {
  return (
    <div className="d-flex flex-wrap w-100 justify-content-around mb-5 project bg-light p-5 text-dark">
      <div className="project-image-container">
        <img className="project-thumbnail" src={thumbnail} alt="" />
      </div>
      <div className="w-50">
        <h3 className="font-weight-bold">{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank">
          View Project Page
        </a>
      </div>
    </div>
  );
}
