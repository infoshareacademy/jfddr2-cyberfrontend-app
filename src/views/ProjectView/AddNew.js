import './AddNew.css';
import React from 'react';

const AddNew = ({ children }) => {
  return (
    <div className="new-column">
      <div className="add-column">+ Dodaj kolejną kolumnę</div>
      {children}
    </div>
  );
};

export default AddNew;
