import SingleProject from "./SingleProject";
import "./Projects.css";
// import NewProjectBtn from "./NewProjectBtn";
import "./NewProjectBtn.css";

function Projects({ data, setData }) {
  const projectsArr = data.map((element) => {
    return { ...element.board };
  });
  console.log(projectsArr);
  return (
    <div>
      <div className="fav__projects">
        <h3>Favourite</h3>
        <div>
          {projectsArr
            .filter((project) => project.favourite === true)
            .map(() => {
              return <SingleProject key={data.id} data={data} />;
            })}
        </div>
      </div>
      <div className="all__projects">
        <h3>All Projects</h3>
        <div className="projects-container">
          {projectsArr.map(() => {
            return <SingleProject key={data.id} data={projectsArr} />;
          })}
        </div>
      </div>
      <div className="arch__projects">
        <h3>ARCHIVE</h3>
        <div>
          {projectsArr
            .filter((project) => project.archive === true)
            .map(() => {
              return <SingleProject key={data.id} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
