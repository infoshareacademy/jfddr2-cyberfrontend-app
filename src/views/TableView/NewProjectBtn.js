import "./NewProjectBtn.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect, useRef } from "react";

function NewProjectBtn({ board, userId }) {
  const [projectName, setProjectName] = useState("");
  const [currentProjectContent, setCurrentProjectContent] = useState({});
  const inputRef = useRef();
  useEffect(() => {
    if (!board || Object.keys(board).length === 0) {
      return <div>Loading...</div>;
    } else {
      const projectsOfUser = board;
      setCurrentProjectContent(projectsOfUser);
    }
  }, [currentProjectContent]);
  const addNewProject = () => {
    const timeStamp = Date.now();
    const projectId = "project" + timeStamp;
    const columnId = "column" + timeStamp;

    if (!projectName || !projectName.trim()) {
      return;
    } else {
      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .update({
          board: {
            ...board,
            [projectId]: {
              projectName: projectName.trim(),
              projectContent: {
                columnId: { columnContent: {}, columnName: "Todo", columnId },
              },
              archive: false,
              favourite: false,
              projectId,
            },
          },
        });
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <button onClick={addNewProject}>NEW project</button>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setProjectName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addNewProject();
          }
        }}
      />
    </div>
  );
}

export default NewProjectBtn;
