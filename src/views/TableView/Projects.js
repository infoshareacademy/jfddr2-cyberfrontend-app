import SingleProject from "./SingleProject";
import "./Projects.css";
import NewProjectBtn from "./NewProjectBtn";
import "./NewProjectBtn.css";

function Projects({ data, setData }) {
  return (
    <div>
      <div className="fav__projects">
        <h3>Favourite</h3>
        <div>
          <SingleProject />
        </div>
      </div>
      <div className="all__projects">
        <h3>All Projects</h3>
        <div className="projects-container">
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <NewProjectBtn />
        </div>
      </div>
      <div className="arch__projects">
        <h3>ARCHIVE</h3>
        <div>
          <SingleProject />
        </div>
      </div>
    </div>
  );
}

export default Projects;
