import firebase from 'firebase/app';
import { useState } from 'react';

const TitleInput = ({
  index,
  columnsInProject,
  label,
  visible,
  setVisible,
  userId,
  currentProject,
}) => {
  const [newTitle, setNewTitle] = useState(label);

  const updateTitleHandler = (e) => {
    if (e.key === 'Enter' && newTitle.trim()) {
      if (!newTitle | !newTitle.trim()) {
        return;
      } else {
        firebase
          .firestore()
          .collection('users')
          .doc(userId)
          .update({
            [`board.${currentProject.projectId}.projectContent`]: {
              ...columnsInProject,
              [index]: {
                ...columnsInProject[index],
                columnName: newTitle.trim(),
              },
            },
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
