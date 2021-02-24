import Column from './Column';
import AddNewColumn from './AddNewColumn';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectView = ({ board, userId }) => {
  let { projectName } = useParams();
  const [currentProject, setCurrentProject] = useState({});
  const [columnsInProject, setColumnsInProject] = useState({});

  useEffect(() => {
    const foundProject = Object.values(board).find(
      (project) => project.projectName === projectName
    );
    setCurrentProject(foundProject);
    setColumnsInProject(foundProject.projectContent);
  });

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
