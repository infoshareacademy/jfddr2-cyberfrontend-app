import { useUser } from "../../contexts/UserContext";
import { useState, useEffect } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

export const NewAgeProjects = () => {
  const { user } = useUser();
  const [projects, setProjects] = useState(null);

  const userUid = user.uid;

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(`users/${userUid}/projects`)
      .onSnapshot((snapshot) => {
        const projects = [];

        snapshot.forEach((project) => {
          projects.push({ id: project.id, ...project.data() });
        });

        setProjects(projects);
      });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [userUid]);

  const deleteProject = (project) => {
    const unsubscribe = firebase
      .firestore()
      .collection(`users/${userUid}/projects`)
      .doc(project.id)
      .delete();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  };

  return (
    projects &&
    projects.map((project) => {
      return (
        <div key={project.id}>
          <Link to={`/board/project/${project.id}`}>{project.projectName}</Link>
          <button onClick={() => deleteProject(project)}>❌</button>
        </div>
      );
    })
  );
};
