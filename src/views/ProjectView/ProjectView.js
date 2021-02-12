import Column from './Column';
import AddNew from './AddNewColumn';

const ProjectView = () => {
  return (
    <div className="project-canvas">
      <Column label="TODO" />
      <Column />
      <AddNew />
    </div>
  );
};

export default ProjectView;
