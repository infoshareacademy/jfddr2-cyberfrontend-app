import './index-reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Column from '../src/views/ProjectView/Column.js';
import AddNew from '../src/views/ProjectView/AddNew.js';

const App = () => {
  return (
    //temporarly className
    <div className="project-canvas">
      <Column>
        <AddNew />
      </Column>
      <Column>
        <AddNew />
      </Column>
      <Column>
        <AddNew />
      </Column>
      <Column>
        <AddNew />
      </Column>
      <AddNew />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
