import firebase from 'firebase/app';
import { useState, useEffect } from 'react';

const TitleInput = ({ index, data, label, visible, setVisible }) => {
  const [newTitle, setNewTitle] = useState(label);
  const [currentCollumnContent, setCurrentCollumnContent] = useState({});

  useEffect(() => {
    const columnsOfUser = data[0].board.project0.projectContent;
    setCurrentCollumnContent(columnsOfUser);
  }, [data]);

  const updateTitleHandler = (e) => {
    if (e.key === 'Enter' && newTitle.trim()) {
      const id = data[0].id;

      if (!newTitle | !newTitle.trim()) {
        return;
      } else {
        firebase
          .firestore()
          .collection('users')
          .doc(id)
          .update({
            'board.project0.projectContent': {
              ...currentCollumnContent,
              [index]: {
                ...currentCollumnContent[index],
                columnName: newTitle.trim(),
              },
            },
          })
          .then(() => {
            console.log('Document successfully updated!');
          });
        setVisible(!visible);
      }
    }
  };

  return (
    <input
      type="text"
      defaultValue={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      onKeyDown={updateTitleHandler}
      autoFocus
    />
  );
};

export default TitleInput;
