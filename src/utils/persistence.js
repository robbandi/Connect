import { getLines, addLine, updateLine, deleteLine } from './api';
import { getRectangles, addRectangle, updateRectangle, deleteRectangle } from './api';
import { getEllipses, addEllipse, updateEllipse, deleteEllipse } from './api';
import { getTexts, addText, updateText, deleteText } from './api';
import { getDiagramElements, addDiagramElement, updateDiagramElement, deleteDiagramElement } from './api';
import { getStamps, addStamp, updateStamp, deleteStamp } from './api';

export const loadLines = async (dispatch) => {
  const lines = await getLines();
  lines.forEach((line) => dispatch(addLine(line)));
};

export const persistLine = (line) => (dispatch, getState) => {
  const { lines } = getState();
  if (lines.find((l) => l.id === line.id)) {
    updateLine(line).then(() => dispatch(updateLine(line)));
  } else {
    addLine(line).then(() => dispatch(addLine(line)));
  }
};

export const deletePersistedLine = (lineId) => (dispatch) => {
  deleteLine(lineId).then(() => dispatch(deleteLine(lineId)));
};

export const loadRectangles = async (dispatch) => {
  const rectangles = await getRectangles();
  rectangles.forEach((rectangle) => dispatch(addRectangle(rectangle)));
};

export const persistRectangle = (rectangle) => (dispatch, getState) => {
    const { rectangles } = getState();
    if (rectangles.find((r) => r.id === rectangle.id)) {
      updateRectangle(rectangle).then(() => dispatch(updateRectangle(rectangle)));
    } else {
      addRectangle(rectangle).then(() => dispatch(addRectangle(rectangle)));
    }
  };

export const deletePersistedRectangle = (rectangleId) => (dispatch) => {
    deleteRectangle(rectangleId).then(() => dispatch(deleteRectangle(rectangleId)));
  };
  
  export const loadEllipses = async (dispatch) => {
    const ellipses = await getEllipses();
    ellipses.forEach((ellipse) => dispatch(addEllipse(ellipse)));
  };
  
  export const persistEllipse = (ellipse) => (dispatch, getState) => {
    const { ellipses } = getState();
    if (ellipses.find((e) => e.id === ellipse.id)) {
      updateEllipse(ellipse).then(() => dispatch(updateEllipse(ellipse)));
    } else {
      addEllipse(ellipse).then(() => dispatch(addEllipse(ellipse)));
    }
  };
  
  export const deletePersistedEllipse = (ellipseId) => (dispatch) => {
    deleteEllipse(ellipseId).then(() => dispatch(deleteEllipse(ellipseId)));
  };
  
  export const loadTexts = async (dispatch) => {
    const texts = await getTexts();
    texts.forEach((text) => dispatch(addText(text)));
  };
  
  export const persistText = (text) => (dispatch, getState) => {
    const { texts } = getState();
    if (texts.find((t) => t.id === text.id)) {
      updateText(text).then(() => dispatch(updateText(text)));
    } else {
      addText(text).then(() => dispatch(addText(text)));
    }
  };
  
  export const deletePersistedText = (textId) => (dispatch) => {
    deleteText(textId).then(() => dispatch(deleteText(textId)));
  };
  
  export const loadDiagramElements = async (dispatch) => {
    const diagramElements = await getDiagramElements();
    diagramElements.forEach((diagramElement) => dispatch(addDiagramElement(diagramElement)));
  };
  
  export const persistDiagramElement = (diagramElement) => (dispatch, getState) => {
    const { diagramElements } = getState();
    if (diagramElements.find((d) => d.id === diagramElement.id)) {
      updateDiagramElement(diagramElement).then(() => dispatch(updateDiagramElement(diagramElement)));
    } else {
      addDiagramElement(diagramElement).then(() => dispatch(addDiagramElement(diagramElement)));
    }
  };
  
  export const deletePersistedDiagramElement = (diagramElementId) => (dispatch) => {
    deleteDiagramElement(diagramElementId).then(() => dispatch(deleteDiagramElement(diagramElementId)));
  };

  export const loadStamps = async (dispatch) => {
    const stamps = await getStamps();
    stamps.forEach((stamp) => dispatch(addStamp(stamp)));
  };
  
  export const persistStamp = (stamp) => (dispatch, getState) => {
    const { stamps } = getState();
    if (stamps.find((s) => s.id === stamp.id)) {
      updateStamp(stamp).then(() => dispatch(updateStamp(stamp)));
    } else {
      addStamp(stamp).then(() => dispatch(addStamp(stamp)));
    }
  };
  
  export const deletePersistedStamp = (stampId) => (dispatch) => {
    deleteStamp(stampId).then(() => dispatch(deleteStamp(stampId)));
  };