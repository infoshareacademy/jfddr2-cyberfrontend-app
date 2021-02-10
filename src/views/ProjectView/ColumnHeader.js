const ColumnHeader = ({ label = 'Your Column' }) => {
  return (
    <div className="column-header">
      <input className="column-title" type="text" defaultValue={label} />
      <div className="column-options">...</div>
    </div>
  );
};

export default ColumnHeader;
