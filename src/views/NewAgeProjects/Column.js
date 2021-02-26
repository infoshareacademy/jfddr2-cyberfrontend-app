import { useUser } from "../../contexts/UserContext";
import { useState, useEffect } from "react";
import firebase from "firebase";

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

  // const addTask = (title) => {
  //   firebase
  //     .firestore()
  //     .collection(
  //       `users/${userUid}/projects/${projectId}/columns/${columnId}/tasks`
  //     )
  //     .add({
  //       title: title,
  //     });
  // };

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
        firebase // to będzie do usuwania pojedynczego taska
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

  const deleteTask = () => {
    console.log("to będzie jakoś usuwać TASK");
  };

  return (
    <>
      <h5 key={column.id}>{column.columnName}</h5>
      <form onSubmit={addTask}>
        <label htmlFor="task-name">Add new task</label>
        <input
          id="task-name"
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
                {allColumns.map((column) => {
                  return (
                    <button
                      key={column.id}
                      disabled={column.id === columnId}
                      onClick={() => moveTask(task, column.id)}
                    >
                      {column.columnName}
                    </button>
                  );
                })}
                <button onClick={deleteTask}>❌</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
