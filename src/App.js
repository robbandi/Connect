import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Canvas from './components/Canvas';
import CollaborativeDrawingApp from './components/CollaborativeDrawingApp';
import TextInput from './components/TextInput';
import { getLines, addLine, updateLine, deleteLine } from '../src/actions/lines';
import { getTexts, addText, updateText, deleteText } from '../src/actions/texts';
import { getDiagramElements, addDiagramElement, updateDiagramElement, deleteDiagramElement } from '../src/actions/diagramElement';
// import { getStamps, addStamp, deleteStamp } from '../src/actions/stamps';

const App = (props) => {
  useEffect(() => {
    const {
      getLinesConnect, getTextsConnect, getDiagramElementsConnect, getStampsConnect,
    } = props;
    getLinesConnect();
    getTextsConnect();
    getDiagramElementsConnect();
    getStampsConnect();
  }, []);

  return (
    <Switch>
      <Route path="/draw" component={Canvas} />
      <Route path="/text" component={TextInput} />
      <Route path="/" component={CollaborativeDrawingApp} />
    </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);