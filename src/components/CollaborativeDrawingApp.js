import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Link,
} from 'react-router-dom';

import { getLines, addLine, updateLine, deleteLine } from '../actions/lines';
import { getTexts, addText, updateText, deleteText } from '../actions/texts';
import { getDiagramElements, addDiagramElement, updateDiagramElement, deleteDiagramElement } from '../actions/diagramElement';
// import { getStamps, addStamp, deleteStamp } from '../actions/stamps';

const CollaborativeDrawingApp = (props) => {
  const {
    lines, texts, diagramElements, stamps,
    getLinesConnect, addLineConnect, updateLineConnect, deleteLineConnect,
    getTextsConnect, addTextConnect, updateTextConnect, deleteTextConnect,
    getDiagramElementsConnect, addDiagramElementConnect, updateDiagramElementConnect, deleteDiagramElementConnect,
    getStampsConnect, addStampConnect, deleteStampConnect,
  } = props;

  return (
    <div>
      <div>
        <Link to="/draw">Draw</Link>
        <Link to="/text">Text</Link>
      </div>
      <div>
        <p>Lines:</p>
        {lines.map((line) => (
          <div key={line.id}>
            <p>{line.id}: {line.color} {line.width}</p>
            <button type="button" onClick={() => deleteLineConnect(line.id)}>Delete</button>
          </div>
        ))}
        <button type="button" onClick={() => addLineConnect()}>Add</button>
      </div>
      <div>
        <p>Texts:</p>
        {texts.map((text) => (
          <div key={text.id}>
            <p>{text.id}: {text.text} {text.color} {text.fontSize}</p>
            <button type="button" onClick={() => deleteTextConnect(text.id)}>Delete</button>
          </div>
        ))}
        <button type="button" onClick={() => addTextConnect()}>Add</button>
      </div>
      <div>
        <p>Diagram elements:</p>
        {diagramElements.map((diagramElement) => (
          <div key={diagramElement.id}>   <p>{diagramElement.id}: {diagramElement.type}</p>
          <button type="button" onClick={() => deleteDiagramElementConnect(diagramElement.id)}>Delete</button>
        </div>
      ))}
      <button type="button" onClick={() => addDiagramElementConnect()}>Add</button>
    </div>
    <div>
      <p>Stamps:</p>
      {stamps.map((stamp) => (
        <div key={stamp.id}>
          <p>{stamp.id}: {stamp.type}</p>
          <button type="button" onClick={() => deleteStampConnect(stamp.id)}>Delete</button>
        </div>
      ))}
      <button type="button" onClick={() => addStampConnect()}>Add</button>
    </div>
  </div>
);
};

const mapStateToProps = (state) => ({
lines: state.lines,
texts: state.texts,
diagramElements: state.diagramElements,
stamps: state.stamps,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
getLinesConnect: getLines,
addLineConnect: addLine,
updateLineConnect: updateLine,
deleteLineConnect: deleteLine,
getTextsConnect: getTexts,
addTextConnect: addText,
updateTextConnect: updateText,
deleteTextConnect: deleteText,
getDiagramElementsConnect: getDiagramElements,
addDiagramElementConnect: addDiagramElement,
updateDiagramElementConnect: updateDiagramElement,
deleteDiagramElementConnect: deleteDiagramElement,
getStampsConnect: getStamps,
addStampConnect: addStamp,
deleteStampConnect: deleteStamp,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CollaborativeDrawingApp);