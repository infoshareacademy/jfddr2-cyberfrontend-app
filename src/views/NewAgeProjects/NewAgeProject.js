import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import firebase from '../../firebase/firebaseConfig';
import { Column } from './Column';
import '../../sass/main.scss';

export const NewAgeProject = () => {
  const { projectId } = useParams();
  const { user } = useUser();
  const [project, setProject] = useState(null);
  const [columns, setColumns] = useState(null);
  const [columnName, setColumnName] = useState('');

  const userUid = user.uid;

  useEffect(() => {
    const docRef = firebase
      .firestore()
      .collection(`users/${userUid}/projects`)
      .doc(projectId);

    const unsubscribe = docRef.onSnapshot((project) => {
      setProject({ id: project.id, ...project.data() });
    });

    const unsubscribe2 = docRef.collection('columns').onSnapshot((snapshot) => {
      const columns = [];

      snapshot.forEach((column) => {
        columns.push({ id: column.id, ...column.data() });
      });

      setColumns(columns);
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      if (unsubscribe2) {
        unsubscribe2();
      }
    };
  }, [projectId, userUid]);

  if (project === null) {
    return <p>Loading...</p>;
  }

  const addColumn = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection(`users/${userUid}/projects/${projectId}/columns`)
      .add({
        columnName: columnName,
        createdAt: Date.now(),
      })
      .then(() => setColumnName(''));
  };

  const deleteColumn = (column) => {
    firebase
      .firestore()
      .collection(`users/${userUid}/projects/${projectId}/columns`)
      .doc(column.id)
      .delete();
  };

  return (
    <div className='project'>
      <div className='project__title--wrapper'>
        <h1 className='project__title'>{project.projectName}</h1>
      </div>
      <form className='project__form' onSubmit={addColumn} autoComplete='off'>
        <label className='project__label' htmlFor='column-name'>
          Add New List
        </label>
        <input
          required
          pattern='^[^\s]+(\s+[^\s]+)*$'
          title='Give a nice and.. normal title 😉'
          placeholder='New List...'
          className='project__input'
          id='column-name'
          value={columnName}
          type='text'
          onChange={(e) => setColumnName(e.target.value)}
        />
      </form>
      {columns &&
        columns.map((column) => {
          return (
            <div className='list' key={column.id}>
              <Column
                // key={column.id}
                project={project}
                column={column}
                allColumns={columns}
              />
              <button
                className='deleteBtn'
                onClick={() => deleteColumn(column)}
              >
                ❌
              </button>
            </div>
          );
        })}
    </div>
  );
};
