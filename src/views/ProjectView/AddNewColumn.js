import './AddNewColumn.css';
import firebase from 'firebase/app';
import { useState, useEffect, useRef } from 'react';

const AddNewColumn = ({ board, userId, currentProject }) => {
  const [title, setTitle] = useState('');
  const [currentCollumnContent, setCurrentCollumnContent] = useState({});
  const inputRef = useRef();

  useEffect(() => {
    if (!board || Object.keys(board).length === 0) {
      return <div>Loading...</div>;
    } else {
      const columnsOfUser = currentProject.projectContent;
      setCurrentCollumnContent(columnsOfUser);
    }
  });

  const addNewColumn = () => {
    const timeStamp = Date.now();
    const columnId = 'column' + timeStamp;

    if (!title || !title.trim()) {
      return;
    } else {
      firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .update({
          [`board.${currentProject.projectId}.projectContent`]: {
            ...currentCollumnContent,
            [columnId]: {
              columnName: title.trim(),
              columnContent: {},
              columnId,
            },
          },
        });
      inputRef.current.value = '';
    }
  };

  return (
    <div className="new-column">
      <div className="add-column">
        <button onClick={addNewColumn}>➕</button>{' '}
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addNewColumn();
            }
          }}
        />
      </div>
    </div>
  );
};

export default AddNewColumn;
