import { ADD_DIAGRAM_ELEMENT, UPDATE_DIAGRAM_ELEMENT } from './types';

export const addDiagramElement = (diagramElement) => ({
  type: ADD_DIAGRAM_ELEMENT,
  diagramElement,
});

export const updateDiagramElement = (diagramElement) => ({
  type: UPDATE_DIAGRAM_ELEMENT,
  diagramElement,
});