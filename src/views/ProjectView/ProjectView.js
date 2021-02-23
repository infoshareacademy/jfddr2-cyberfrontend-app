import Column from './Column';
import AddNewColumn from './AddNewColumn';

const ProjectView = ({ data }) => {
  const fetchedData = () => {
    if (!data || Object.keys(data).length === 0) {
      return <div>Loading...</div>;
    } else {
      const columnsInProject = data[0].board.project0.projectContent;
      const userColumns = Object.keys(columnsInProject).map((key) => {
        return (
          <Column
            key={key}
            index={key}
            label={columnsInProject[key].columnName}
            data={data}
          />
        );
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
