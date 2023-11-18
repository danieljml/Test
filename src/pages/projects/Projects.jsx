import uniqid from "uniqid";

const projects = [
  {
    image:
      "https://danieljml.github.io/dm-portfolio/assets/Homepage-Contruction-ba3eb7e2.png",
    title: "Project"
  },
  {
    image:
      "https://danieljml.github.io/dm-portfolio/assets/podcast-stream-368048d4.png",
    title: "Project"
  },
  {
    image:
      "https://danieljml.github.io/dm-portfolio/assets/Rock-Paper-Scissors-a78d59b8.png",
    title: "Project"
  },
  {
    image:
      "https://danieljml.github.io/dm-portfolio/assets/Homepage-Contruction-ba3eb7e2.png",
    title: "Project"
  },
  {
    image:
      "https://danieljml.github.io/dm-portfolio/assets/podcast-stream-368048d4.png",
    title: "Project"
  },
  {
    image:
      "https://danieljml.github.io/dm-portfolio/assets/Rock-Paper-Scissors-a78d59b8.png",
    title: "Project"
  },
  {
    image:
      "https://danieljml.github.io/dm-portfolio/assets/Rock-Paper-Scissors-a78d59b8.png",
    title: "Project",
    subtitle: "Subtitle"
  }
];

const Projects = () => {
  return (
    <section className="main__content">
      <div className="projects">
        {projects.map(({ image, title, subtitle }, i) => (
          <div key={uniqid()}>
            <p className="project__title">
              {title} {i + 1}
            </p>
            <span>{subtitle}</span>
            <div
              className="project__item"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="project__content"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
