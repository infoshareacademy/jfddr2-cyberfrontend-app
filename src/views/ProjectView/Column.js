import './Column.css';
import ColumnHeader from './ColumnHeader';
import ColumnContent from './ColumnContent';
import ColumnFooter from './ColumnFooter';

const Column = ({ label, index, columnsInProject, userId, currentProject }) => {
  return (
    <div className="column">
      <ColumnHeader
        label={label}
        index={index}
        userId={userId}
        columnsInProject={columnsInProject}
        currentProject={currentProject}
      />
      <ColumnContent />
      <ColumnFooter
        index={index}
        columnsInProject={columnsInProject}
        userId={userId}
        currentProject={currentProject}
      />
    </div>
  );
};

export default Column;
