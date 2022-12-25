import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addText, updateText } from '../actions/texts';

const TextArea = (props) => {
  const {
    addTextConnect, updateTextConnect,
  } = props;

  const [text, setText] = useState('');
  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState(12);
  const [id, setId] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      updateTextConnect({ id, text, color, fontSize });
      setId(null);
      setText('');
      setColor('black');
      setFontSize(12);
    } else {
      addTextConnect({ text, color, fontSize });
      setText('');
      setColor('black');
      setFontSize(12);
    }
  };

  const handleEdit = (textObject) => {
    setId(textObject.id);
    setText(textObject.text);
    setColor(textObject.color);
    setFontSize(textObject.fontSize);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          Text:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <br />
        <label htmlFor="color">
          Color:
          <input type="color" value={color} onChange={handleColorChange} />
        </label>
        <br />
        <label htmlFor="fontSize">
          Font size:
          <input type="number" value={fontSize} onChange={handleFontSizeChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={() => setId(null)}>Cancel</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTextConnect: addText,
  updateTextConnect: updateText,
}, dispatch);

export default connect(null, mapDispatchToProps)(TextArea);