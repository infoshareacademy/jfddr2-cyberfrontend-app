import { useUser } from '../../contexts/UserContext';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../firebase/firebaseConfig';
import '../../sass/main.scss';
import { useProject } from '../../contexts/ProjectContext';
import SvgSettings from '../buttons/Settings';
import SvgDelete from '../buttons/Delete';

const snapshotToArrayWithId = (snapshot) => {
  const items = [];

  snapshot.forEach((item) => {
    items.push({ id: item.id, ...item.data() });
  });
  return items;
};

export const Column = ({
  column,
  project,
  allColumns,
  columnIndex,
  deleteColumn,
}) => {
  const { user } = useUser();
  const [tasks, setTasks] = useState(null);
  const [taskName, setTaskName] = useState('');
  const {
    expandedTaskId,
    setExpandedTaskId,
    expandedColumnIndex,
    setExpandedColumnIndex,
  } = useProject();

  const userUid = user.uid;
  const projectId = project.id;
  const columnId = column.id;

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(
        `users/${userUid}/projects/${projectId}/columns/${columnId}/tasks`
      )

      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        setTasks(snapshotToArrayWithId(snapshot));
      });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [userUid, projectId, columnId]);

  const addTask = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection(
        `users/${userUid}/projects/${projectId}/columns/${columnId}/tasks`
      )
      .add({
        taskName: taskName,
        createdAt: Date.now(),
      })
      .then(() => setTaskName(''));
  };

  const moveTask = (task, targetColumnId) => {
    const unsubscribe = firebase
      .firestore()
      .collection(
        `users/${userUid}/projects/${projectId}/columns/${targetColumnId}/tasks`
      )
      .doc(task.id)
      .set(task)
      .then(() => {
        firebase
          .firestore()
          .collection(
            `users/${userUid}/projects/${projectId}/columns/${columnId}/tasks`
          )
          .doc(task.id)
          .delete();
      });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  };

  const deleteTask = (task) => {
    firebase
      .firestore()
      .collection(
        `users/${userUid}/projects/${projectId}/columns/${columnId}/tasks`
      )
      .doc(task.id)
      .delete();
  };

  return (
    <>
      <div
        className='list-title'
        onClick={() => {
          setExpandedColumnIndex((old) =>
            old === columnIndex ? '' : columnIndex
          );
        }}
      >
        <span>{column.columnName}</span>
      </div>
      {expandedColumnIndex === columnIndex && (
        <div className='list-content task'>
          <form className='task__form' onSubmit={addTask} autoComplete='off'>
            {/* <label className='task__label' htmlFor='task-name'>
              New task
            </label> */}
            <input
              className='task__input'
              value={taskName}
              type='text'
              onChange={(e) => setTaskName(e.target.value)}
              required
              pattern='^[^\s]+(\s+[^\s]+)*$'
              title='Give a nice and.. normal title 😉'
              placeholder='New Task...'
            />
          </form>
          <ul>
            {tasks &&
              tasks.map((task) => {
                return (
                  <li key={task.id}>
                    <div className='list-row'>
                      <h4>{task.taskName}</h4>
                      <button
                        className='optionBtn'
                        onClick={() =>
                          setExpandedTaskId((existingTaskId) => {
                            if (existingTaskId === task.id) {
                              return null;
                            }
                            return task.id;
                          })
                        }
                      >
                        <SvgSettings />
                      </button>
                    </div>
                    {expandedTaskId === task.id &&
                      ReactDOM.createPortal(
                        <>
                          <div className='selectContainer'>
                            <span>Move to:</span>
                            <select
                              className='selectContainer__select'
                              onChange={(event) => {
                                moveTask(task, event.target.value);
                              }}
                              value={columnId}
                            >
                              {allColumns.map((column) => (
                                <option
                                  disabled={column.id === columnId}
                                  key={column.id}
                                  value={column.id}
                                >
                                  {column.columnName}
                                </option>
                              ))}
                            </select>
                            <button
                              className='deleteBtn'
                              onClick={() => deleteTask(task)}
                            >
                              <SvgDelete />
                            </button>
                          </div>
                        </>,
                        document.getElementById('overlay')
                      )}
                  </li>
                );
              })}
          </ul>
          <button
            className='deleteBtn columnDelete'
            onClick={() => deleteColumn(column)}
          >
            <SvgDelete />
          </button>
        </div>
      )}
    </>
  );
};
