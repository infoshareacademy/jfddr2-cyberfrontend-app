import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import firebase from "firebase";
import { Column } from "./Column";

export const NewAgeProject = () => {
  const { projectId } = useParams();
  const { user } = useUser();
  const [project, setProject] = useState(null);
  const [columns, setColumns] = useState(null);
  const [columnName, setColumnName] = useState("");

  const userUid = user.uid;

  useEffect(() => {
    const docRef = firebase
      .firestore()
      .collection(`users/${userUid}/projects`)
      .doc(projectId);

    docRef.onSnapshot((project) => {
      setProject({ id: project.id, ...project.data() });
    });

    docRef.collection("columns").onSnapshot((snapshot) => {
      const columns = [];

      snapshot.forEach((column) => {
        columns.push({ id: column.id, ...column.data() });
      });

      setColumns(columns);
    });
  }, [projectId, userUid]);

  if (project === null) {
    return <p>Loading...</p>;
  }

  const addColumn = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection(`users/${userUid}/projects/${projectId}/columns`)
      .add({
        columnName: columnName,
      })
      .then(() => setColumnName(""));
  };

  const deleteColumn = () => {
    console.log("to będzie jakoś usuwać COLUMN");
  };

  return (
    <div>
      <h1>{project.projectName}</h1>
      <form key="halo" onSubmit={addColumn} autoComplete="off">
        <label htmlFor="column-name">Add new column</label>
        <input
          id="column-name"
          value={columnName}
          type="text"
          onChange={(e) => setColumnName(e.target.value)}
        />
      </form>
      {columns &&
        columns.map((column) => {
          return (
            <div>
              <Column
                key={column.id}
                project={project}
                column={column}
                allColumns={columns}
              />
              <button onClick={deleteColumn}>❌</button>
            </div>
          );
        })}
    </div>
  );
};
