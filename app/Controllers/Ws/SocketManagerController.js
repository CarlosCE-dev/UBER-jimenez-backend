'use strict'
const { SocketUsers } = require('../../Classes/SocketUsers');

const users = new SocketUsers();
class SocketManagerController {

  constructor ({ socket, request }) {
    this.socket = socket;
    this.request = request;
    
    this.onStart();
  }

  /**
   * Iniciar socket y guardar usuario
   */
  onStart(){
    const { id } = this.request.qs;
    
    const payload = { id, socketId: this.socket.id };
    const user = users.addUser( payload );
    this.socket.broadcast('message', user);
  }

  onMessage (message) {
    console.log('onMessage', message)
  }

  onClose () {
    console.log('onClose');
  }

  onError () {
    console.log('onError');
  }

}

module.exports = SocketManagerController
