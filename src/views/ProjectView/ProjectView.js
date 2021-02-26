import Column from "./Column";
import AddNewColumn from "./AddNewColumn";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext";

const ProjectView = () => {
  const { user, userData } = useUser();
  const userId = user.uid;
  const board = userData.board || {};

  let { projectName } = useParams();

  const currentProject = Object.values(board).find(
    (project) => project.projectName === projectName
  );

  const columnsInProject = currentProject?.projectContent || {};

  const fetchedData = () => {
    if (!board || Object.keys(board).length === 0) {
      return <div>Loading...</div>;
    } else {
      const projectColumns = Object.values(columnsInProject).map((column) => {
        return (
          <Column
            key={column.columnName}
            index={column.columnId}
            label={column.columnName}
            currentProject={currentProject}
            columnsInProject={columnsInProject}
            userId={userId}
          />
        );
      });
      return projectColumns;
    }
  };

  return (
    <div className="project-canvas">
      <button>🚫</button>
      {fetchedData()}
      <AddNewColumn
        board={board}
        userId={userId}
        currentProject={currentProject}
      />
    </div>
  );
};

export default ProjectView;
