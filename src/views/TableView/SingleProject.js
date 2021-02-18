import "./SingleProject.css";

function SingleProject({ data }) {
  // console.log(data);
  return (
    <div key={data.id} className="single-project">
      <p>Name</p>
      <p>project ID</p>
    </div>
  );
}

export default SingleProject;
