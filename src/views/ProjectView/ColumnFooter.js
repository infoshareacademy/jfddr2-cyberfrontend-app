import firebase from 'firebase/app';

const ColumnFooter = ({ index, data, userId, currentProject }) => {
  const deleteColumn = (index) => {
    const newData = currentProject.projectContent;
    delete newData[index];

    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .update({ 'board.project0.projectContent': newData });
  };
  return (
    <div className="column-footer">
      <div className="add-task">+ Dodaj kolejną task</div>
      <div className="column-options">
        <button onClick={() => deleteColumn(index)}>❌</button>
      </div>
    </div>
  );
};

export default ColumnFooter;
