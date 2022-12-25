import React from 'react';
import ColorPicker from './ColorPicker';
import DiagramElement from './DiagramElement';
import TextInput from './TextInput';

const Toolbar = (props) => {
  const {
    selectedTool, color, setSelectedTool, setColor,
  } = props;

  return (
    <div>
      <button type="button" onClick={() => setSelectedTool('pen')}>Pen</button>
      <button type="button" onClick={() => setSelectedTool('line')}>Line</button>
      <button type="button" onClick={() => setSelectedTool('rectangle')}>Rectangle</button>
      <button type="button" onClick={() => setSelectedTool('ellipse')}>Ellipse</button>
      <button type="button" onClick={() => setSelectedTool('text')}>Text</button>
      <button type="button" onClick={() => setSelectedTool('diagramElement')}>Diagram element</button>
      <ColorPicker color={color} handleColorChange={setColor} />
      {selectedTool === 'diagramElement' && <DiagramElement />}
      {selectedTool === 'text' && <TextInput />}
    </div>
  );
};

export default Toolbar;