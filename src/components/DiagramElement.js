import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

const DiagramElement = ({
  type,
  id,
  x,
  y,
  width,
  height,
  color,
  updateConnect,
  deleteConnect,
  text,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateConnect({ id, type, text: tempText });
  };

  const handleChange = (event) => {
    setTempText(event.target.value);
  };

  const handleDelete = () => {
    deleteConnect({ id, type });
  };

  if (isEditing) {
    return (
      <TextInput
        value={tempText}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    );
  }

  return (
    <div
      className="diagram-element"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
    }}
    onDoubleClick={handleDoubleClick}
  >
    {text}
    <button type="button" onClick={handleDelete}>
      x
    </button>
  </div>
);
};

DiagramElement.propTypes = {
type: PropTypes.string.isRequired,
id: PropTypes.string.isRequired,
x: PropTypes.number.isRequired,
y: PropTypes.number.isRequired,
width: PropTypes.number.isRequired,
height: PropTypes.number.isRequired,
color: PropTypes.string.isRequired,
updateConnect: PropTypes.func.isRequired,
deleteConnect: PropTypes.func.isRequired,
text: PropTypes.string,
};

DiagramElement.defaultProps = {
text: '',
};

export default DiagramElement;