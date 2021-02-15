import Column from './Column';
import AddNew from './AddNewColumn';

const ProjectView = () => {
  // const { board } = data[0];
  // const { projectContent } = board[0];

  // const userColumns = projectContent.map((column, index) => {
  //   return <Column key={index} label={column.columnName} />;
  // });

  return (
    <div className="project-canvas">
      {/* {userColumns} */}
      <AddNew />
    </div>
  );
};

export default ProjectView;
