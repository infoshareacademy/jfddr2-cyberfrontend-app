import './AddNewColumn.css';
import firebase from 'firebase/app';
import { useState } from 'react';
import { dummyProject0, dummyProject1, dummyProject2 } from './dummyData';

const AddNewColumn = ({ data }) => {
  const [title, setTitle] = useState('');

  const addNewColumn = () => {
    const id = data[0].id;
    console.log(id);

    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .update({
        board: {
          project0: dummyProject0,
          project1: dummyProject1,
          project2: dummyProject2,
        },
      })
      .then(() => {
        console.log('Document successfully updated!');
      });
  };

  const addTodoHandler = (e) => {
    if (e.key === 'Enter' && title.trim()) {
      const newTitle = {
        content: title,
        isCompleted: false,
      };
      console.log(newTitle);
      console.log(data);

      // addTodoToDb(todo)
      //   .then((res) => {
      //     if (res.ok) {
      //       setText(todo);
      //       setText('');
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  return (
    <div className="new-column">
      <div className="add-column">
        <button onClick={addNewColumn}>➕</button>{' '}
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={addTodoHandler}
        />
      </div>
    </div>
  );
};

export default AddNewColumn;
