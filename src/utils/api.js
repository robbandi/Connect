import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getLines = () => api.get('/lines');
export const addLine = (line) => api.post('/lines', line);
export const updateLine = (line) => api.put(`/lines/${line.id}`, line);
export const deleteLine = (lineId) => api.delete(`/lines/${lineId}`);

export const getRectangles = () => api.get('/rectangles');
export const addRectangle = (rectangle) => api.post('/rectangles', rectangle);
export const updateRectangle = (rectangle) => api.put(`/rectangles/${rectangle.id}`, rectangle);
export const deleteRectangle = (rectangleId) => api.delete(`/rectangles/${rectangleId}`);

export const getEllipses = () => api.get('/ellipses');
export const addEllipse = (ellipse) => api.post('/ellipses', ellipse);
export const updateEllipse = (ellipse) => api.put(`/ellipses/${ellipse.id}`, ellipse);
export const deleteEllipse = (ellipseId) => api.delete(`/ellipses/${ellipseId}`);

export const getTexts = () => api.get('/texts');
export const addText = (text) => api.post('/texts', text);
export const updateText = (text) => api.put(`/texts/${text.id}`, text);
export const deleteText = (textId) => api.delete(`/texts/${textId}`);

export const getDiagramElements = () => api.get('/diagram-elements');
export const addDiagramElement = (diagramElement) => api.post('/diagram-elements', diagramElement);
export const updateDiagramElement = (diagramElement) => api.put(`/diagram-elements/${diagramElement.id}`, diagramElement);
export const deleteDiagramElement = (diagramElementId) => api.delete(`/diagram-elements/${diagramElementId}`);

export const getStamps = () => api.get('/stamps');
export const addStamp = (stamp) => api.post('/stamps', stamp);
export const updateStamp = (stamp) => api.put(`/stamps/${stamp.id}`, stamp);
export const deleteStamp = (stampId) => api.delete(`/stamps/${stampId}`);