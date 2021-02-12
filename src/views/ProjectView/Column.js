import './Column.css';
import React from 'react';
import ColumnHeader from './ColumnHeader';
import ColumnContent from './ColumnContent';
import ColumnFooter from './ColumnFooter';

const Column = () => {
  return (
    <div className="column">
      <ColumnHeader label="Hi" />
      <ColumnContent />
      <ColumnFooter />
    </div>
  );
};

export default Column;
