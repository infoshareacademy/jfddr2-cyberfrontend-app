const ColumnHeader = ({ label = 'Your Column' }) => {
  return (
    <div className="column-header">
      <p className="column-title">{label}</p>
      <div className="column-options">🖊️</div>
    </div>
  );
};

export default ColumnHeader;
