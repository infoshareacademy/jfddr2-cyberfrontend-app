import './SingleProject.css';

function SingleProject({ data }) {
  // console.log(data);
  return (
    <div className="single-project">
      <p>{data.projectName}</p>
      <p>{data.projectId}</p>
    </div>
  );
}

export default SingleProject;
