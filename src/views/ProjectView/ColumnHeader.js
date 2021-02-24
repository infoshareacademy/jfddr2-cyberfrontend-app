import { useState } from 'react';
import TitleInput from './TitleInput';

const ColumnHeader = ({
  label = 'Your Column',
  index,
  userId,
  columnsInProject,
  currentProject,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="column-header">
      {visible ? (
        <TitleInput
          index={index}
          columnsInProject={columnsInProject}
          label={label}
          visible={visible}
          userId={userId}
          currentProject={currentProject}
          setVisible={setVisible}
        />
      ) : (
        <p className="column-title">{label}</p>
      )}
      <div className="column-options">
        <button onClick={() => setVisible(!visible)}>🖊️</button>
      </div>
    </div>
  );
};

export default ColumnHeader;
