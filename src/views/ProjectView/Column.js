import './Column.css';
import React from 'react';

const Column = (props) => {
  return (
    <div className="column">
      <div className="column-header">
        <input className="column-title" type="text" defaultValue="Column" />
        <div className="column-options">...</div>
      </div>
      <div className="column-content"></div>
      <div className="column-footer">
        {props.children}
        <div className="column-options">...</div>
      </div>
    </div>
  );
};

export default Column;
