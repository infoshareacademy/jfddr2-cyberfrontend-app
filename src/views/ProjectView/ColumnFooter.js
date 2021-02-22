import firebase from 'firebase/app';

const ColumnFooter = ({ index, data }) => {
  const deleteColumn = (index) => {
    const id = data[0].id;

    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .set(
        {
          'board.project0.projectContent': {
            [index]: firebase.firestore.FieldValue.delete(),
          },
        },
        { merge: true }
      )
      .then(() => {
        console.log('Document successfully updated!');
      });
  };
  return (
    <div className="column-footer">
      <div className="add-task">+ Dodaj kolejną task</div>
      <div className="column-options">
        <button onClick={() => deleteColumn(index)}>❌</button>
        {/* <button onClick={() => console.log(index)}>❌</button> */}
      </div>
    </div>
  );
};

export default ColumnFooter;
