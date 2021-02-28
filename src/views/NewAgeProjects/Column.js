import { useUser } from "../../contexts/UserContext";
import { useState, useEffect } from "react";
import firebase from "firebase";
import "../../sass/main.scss";

const snapshotToArrayWithId = (snapshot) => {
  const items = [];

  snapshot.forEach((item) => {
    items.push({ id: item.id, ...item.data() });
  });
  return items;
};

export const Column = ({ column, project, allColumns }) => {
  const { user } = useUser();
  const [tasks, setTasks] = useState(null);
  const [taskName, setTaskName] = useState("");
  // const [select, setSelect] = useState("");

  const userUid = user.uid;
  const projectId = project.id;
  const columnId = column.id;

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(
        `users/${userUid}/projects/${projectId}/columns/${columnId}/tasks`
      )
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
      })
      .then(() => setTaskName(""));
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
      <input
        type="radio"
        name="select"
        className="accordion-select"
        checked
        readOnly
      />
      <div className="accordion-title">
        <span>{column.columnName}</span>
      </div>
      <div className="accordion-content">
        <form onSubmit={addTask} autoComplete="off">
          <label htmlFor="task-name">Add new task</label>
          <input
            value={taskName}
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </form>
        <ul>
          {tasks &&
            tasks.map((task) => {
              return (
                <li key={task.id}>
                  <h6>{task.taskName}</h6>
                  {/* {allColumns.map((column) => {
                    return (
                      <button
                        key={column.id}
                        disabled={column.id === columnId}
                        onClick={() => moveTask(task, column.id)}
                      >
                        {column.columnName}
                      </button>
                    );
                  })} */}
                  <span>Move to:</span>
                  <select
                    onChange={(event) => {
                      moveTask(task, event.target.value);
                      // setSelect(event.target.value);
                    }}
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
                    className="deleteBtn"
                    onClick={() => deleteTask(task)}
                  >
                    ❌
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
