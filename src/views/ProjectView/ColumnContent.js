import './ColumnContent.css';
import Task from './Task';

const ColumnContent = () => {
  return (
    <div className="column-content">
      <ul className="task-list">
        <Task />
      </ul>
    </div>
  );
};

export default ColumnContent;
