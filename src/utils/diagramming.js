import jsPlumb from 'jsplumb';

export const createDiagramElement = (type, x, y) => {
  const element = document.createElement('div');
  element.className = 'diagram-element';
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  element.innerHTML = type;
  return element;
};

export const addDiagramElement = (element, diagramContainer) => {
  diagramContainer.appendChild(element);
  jsPlumb.draggable(element);
  jsPlumb.makeSource(element, {
    anchor: 'Continuous',
    connector: ['StateMachine', { curviness: 20 }],
  });
}