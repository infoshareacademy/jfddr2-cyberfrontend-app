import "./NewProjectBtn.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";

function NewProjectBtn({ board, userId }) {
  const [projectName, setProjectName] = useState("");

  const addNewProject = (event) => {
    event.preventDefault();
    firebase
      .firestore()
      .collection(`users/${userId}/projects`)
      .add({
        projectName: projectName.trim(),
        archive: false,
        favourite: false,
      })
      .then((ref) => {
        setProjectName("");

        ref
          .collection("columns")
          .add({
            columnName: "Todo",
          })
          .then((ref) => {
            ref.collection("tasks").add({
              taskName: "Be awesome",
            });
          });

        ref.collection("columns").add({
          columnName: "In Progress",
        });

        ref.collection("columns").add({
          columnName: "Done",
        });
      });
  };
  return (
    <div>
      <form onSubmit={addNewProject} autoComplete="off">
        <label htmlFor="project-name">Add new project</label>
        <input
          id="project-name"
          value={projectName}
          type="text"
          onChange={(e) => setProjectName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default NewProjectBtn;
