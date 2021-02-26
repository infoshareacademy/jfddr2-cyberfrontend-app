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

  const addColumn = (name) => {
    firebase
      .firestore()
      .collection(`users/${userUid}/projects/${projectId}/columns`)
      .add({
        columnName: name,
      });
  };

  return (
    <div>
      <h4>{project.projectName}</h4>
      <button onClick={() => addColumn("In progress")}>Add column</button>
      {columns &&
        columns.map((column) => {
          return (
            <Column
              key={column.id}
              project={project}
              column={column}
              allColumns={columns}
            />
          );
        })}
    </div>
  );
};
