import './Column.css';
import ColumnHeader from './ColumnHeader';
import ColumnContent from './ColumnContent';
import ColumnFooter from './ColumnFooter';

const Column = ({ label, index, data }) => {
  return (
    <div className="column">
      <ColumnHeader label={label} />
      <ColumnContent />
      <ColumnFooter index={index} data={data} />
    </div>
  );
};

export default Column;
