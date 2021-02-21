import Column from './Column';
import AddNewColumn from './AddNewColumn';

const ProjectView = ({ data, setData }) => {
  const fetchedData = () => {
    if (!data || Object.keys(data).length === 0) {
      return <div>Loading...</div>;
    } else {
      const columnsInProject = data[0]?.board.project0.projectContent;
      const userColumns = Object.keys(columnsInProject)?.map((key, index) => {
        return <Column key={index} label={columnsInProject[key].columnName} />;
      });
      return userColumns;
    }
  };

  return (
    <div className="project-canvas">
      {fetchedData()}
      <AddNewColumn data={data} />
    </div>
  );
};

export default ProjectView;
