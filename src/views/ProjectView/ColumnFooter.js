import firebase from 'firebase/app';

const ColumnFooter = ({ index, data }) => {
  const deleteColumn = (index) => {
    const id = data[0].id;
    const newData = data[0].board.project0.projectContent;
    delete newData[index];

    firebase
      .firestore()
      .collection('users')
      .doc(id)
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
