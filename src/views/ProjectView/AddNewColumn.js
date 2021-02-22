import './AddNewColumn.css';
import firebase from 'firebase/app';
import { useState, useEffect } from 'react';
// import { dummyProject0, dummyProject1, dummyProject2 } from './dummyData';

const AddNewColumn = ({ data }) => {
  const [title, setTitle] = useState('');
  const [index, setIndex] = useState(0);
  const [currentCollumnContent, setCurrentCollumnContent] = useState({});

  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      return <div>Loading...</div>;
    } else {
      const columnsOfUser = data[0].board.project0.projectContent;
      const projectLength = Object.keys(columnsOfUser).length;
      setCurrentCollumnContent(columnsOfUser);
      setIndex(projectLength);
    }
  }, [data]);

  const addNewColumn = () => {
    const id = data[0].id;

    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .update({
        'board.project0.projectContent': {
          ...currentCollumnContent,
          ['column' + index]: {
            columnName: title,
            columnContent: {},
          },
        },
      })
      .then(() => {
        setTitle('Document successfully updated!');
      });
    setTitle('');
  };

  return (
    <div className="new-column">
      <div className="add-column">
        <button onClick={addNewColumn}>➕</button>{' '}
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
    </div>
  );
};

export default AddNewColumn;
