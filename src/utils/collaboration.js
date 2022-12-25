import io from 'socket.io-client';

export default class Collaboration {
  constructor(roomId, updateDiagramElementConnect) {
    this.socket = io('http://localhost:3000/');
    this.roomId = roomId;
    this.updateDiagramElementConnect = updateDiagramElementConnect;
  }

  init() {
    this.socket.on('connect', () => {
      this.socket.emit('join', this.roomId);
    });

    this.socket.on('updateDiagramElement', (diagramElement) => {
      console.log(`collaboration: updateDiagramElement ${diagramElement.id}`);
      this.updateDiagramElementConnect(diagramElement);
    });
  }

  updateDiagramElement(diagramElement) {
    this.socket.emit('updateDiagramElement', diagramElement);
  }
}