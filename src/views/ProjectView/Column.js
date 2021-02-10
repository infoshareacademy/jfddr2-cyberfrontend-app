import './Column.css';
import React from 'react';
import ColumnContent from './ColumnContent';

const Column = ({ label = 'Your Column' }) => {
  return (
    <div className="column">
      <div className="column-header">
        <input className="column-title" type="text" defaultValue={label} />
        <div className="column-options">...</div>
      </div>
      <ColumnContent />
      <div className="column-footer">
        <div className="add-task">+ Dodaj kolejną task</div>
        <div className="column-options">...</div>
      </div>
    </div>
  );
};

export default Column;
