import './index-reset.css';
import React from 'react';
import Column from '../src/views/ProjectView/Column.js';
import AddNew from './views/ProjectView/AddNewColumn.js';
import TopNav from './views/TopNav/TopNav';
import TableView from './views/TableView/TableView';

const App = () => {
  return (
    <div className="project-canvas">
      <Column label="TODO" />
      <Column />
      <AddNew />
      <TopNav />
      <TableView />
    </div>
  );
};

export default App;
