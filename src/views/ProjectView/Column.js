import './Column.css';
import ColumnHeader from './ColumnHeader';
import ColumnContent from './ColumnContent';
import ColumnFooter from './ColumnFooter';

const Column = ({ label }) => {
  return (
    <div className="column">
      <ColumnHeader label={label} />
      <ColumnContent />
      <ColumnFooter />
    </div>
  );
};

export default Column;
