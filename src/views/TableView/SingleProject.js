import "./SingleProject.css";
import { Link } from "react-router-dom";

function SingleProject({ data }) {
  // const deleteProject = (index) => {
  //     const id = data[0].id;
  //     const newData = data[0].board;
  //     delete newData.project2; //usunie project2 z board; jeśli chcesz wziąć zmienna z funkcji to robisz newData[index] gdzie index to klucz obiektu (nazwa projektu)
  //     firebase
  //       .firestore()
  //       .collection('users')
  //       .doc(id)
  //       .update({ board: newData })
  //       .then(() => {
  //         console.log('Document successfully deleted!');
  //       });
  return (
    <Link to={`/board/${data.projectName}`} className="single-project">
      <p>{data.projectName}</p>
      {/* <p>{data.projectId}</p> */}
    </Link>
  );
}

export default SingleProject;
