import { useState } from 'react';
import TitleInput from './TitleInput';

const ColumnHeader = ({ label = 'Your Column', index, data }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="column-header">
      {visible ? (
        <TitleInput
          index={index}
          data={data}
          label={label}
          visible={visible}
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
