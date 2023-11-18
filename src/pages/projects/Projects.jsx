import uniqid from "uniqid";
import "./styles.css"
import projects from "../../my_projects/soft_exudates_detection_and_classification_in_retinal_fundus_images/description.json"

// const projects = [
//   {
//     image:
//       "https://danieljml.github.io/dm-portfolio/assets/Homepage-Contruction-ba3eb7e2.png",
//     title: "Project"
//   },
//   {
//     image:
//       "https://danieljml.github.io/dm-portfolio/assets/podcast-stream-368048d4.png",
//     title: "Project"
//   },
//   {
//     image:
//       "https://danieljml.github.io/dm-portfolio/assets/Rock-Paper-Scissors-a78d59b8.png",
//     title: "Project"
//   },
//   {
//     image:
//       "https://danieljml.github.io/dm-portfolio/assets/Homepage-Contruction-ba3eb7e2.png",
//     title: "Project"
//   },
//   {
//     image:
//       "https://danieljml.github.io/dm-portfolio/assets/podcast-stream-368048d4.png",
//     title: "Project"
//   },
//   {
//     image:
//       "https://danieljml.github.io/dm-portfolio/assets/Rock-Paper-Scissors-a78d59b8.png",
//     title: "Project"
//   },
//   {
//     image:
//       "https://danieljml.github.io/dm-portfolio/assets/Rock-Paper-Scissors-a78d59b8.png",
//     title: "Project",
//     subtitle: "Subtitle"
//   }
// ];

const Projects = () => {
  return (
    <section className="main__content">
      <div className="projects">
        {projects.map(({ image, title, description }, i) => (
          <div key={uniqid()}>
            <p className="project__title">
              {title} {i + 1}
            </p>
            <span>{description}</span>
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
