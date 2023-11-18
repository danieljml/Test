import uniqid from 'uniqid';
import './styles.css';
import useProjects from './useProjects';

const Projects = () => {
  const { jsonData } = useProjects();
  return (
    <section className="main__content">
      {jsonData.length > 0 ? (
        <div className="projects">
          {jsonData.map(({ title, description }) => {
            return (
              <div key={uniqid()}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        'Loading...'
      )}
    </section>
  );
};

export default Projects;
