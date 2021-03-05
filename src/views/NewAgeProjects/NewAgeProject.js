import '../../sass/main.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useUser } from '../../contexts/UserContext';
import firebase from '../../firebase/firebaseConfig';
import { Column } from './Column';
import { ProjectProvider } from '../../contexts/ProjectContext';

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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(columns);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setColumns(items);
  };

  return (
    <div className="project">
      <div className="project__title--wrapper">
        <h1 className="project__title">{project.projectName}</h1>
      </div>
      <form className="project__form" onSubmit={addColumn} autoComplete="off">
        <input
          required
          pattern="^[^\s]+(\s+[^\s]+)*$"
          title="Give a nice and.. normal title 😉"
          placeholder="🖍 New List"
          className="project__input"
          id="column-name"
          value={columnName}
          type="text"
          onChange={(e) => setColumnName(e.target.value)}
        />
      </form>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <ProjectProvider>
          <Droppable droppableId="droppableColumns">
            {(provided) => (
              <section {...provided.droppableProps} ref={provided.innerRef}>
                {columns &&
                  columns.map((column, index) => {
                    return (
                      <Draggable
                        key={column.id}
                        draggableId={column.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={column.id}
                            className="list"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Column
                              columnIndex={index}
                              project={project}
                              column={column}
                              allColumns={columns}
                              deleteColumn={deleteColumn}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </ProjectProvider>
      </DragDropContext>
    </div>
  );
};
