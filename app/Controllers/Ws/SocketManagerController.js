'use strict'
const Room = use('App/Models/Room');
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
  async onStart(){
    try {
      
      const id = parseInt(this.request.qs.id);
      
      let rooms = [];
      if ( id !== 3 ) {

        if ( id === 2 ) {
          rooms = await Room
          .query()
          .select('Id')
          .where('ClientId', id)
          .where('status', 1)
          .fetch()
          rooms = rooms.toJSON();
        } else {
          rooms = await Room
          .query()
          .select('Id')
          .where('DeliveryId', id)
          .where('status', 1)
          .fetch()
          rooms = rooms.toJSON();
        }
      }

      const roomsArray = rooms.map( r => r.Id );
      
      const payload = { id, socketId: this.socket.id, rooms: roomsArray };
      const userAdded = users.addUser(payload);

      const userRoomOnline = users.findUsersOnline(roomsArray, id);
      
      this.socket.emitTo('message', userAdded, userRoomOnline );

    } catch (error) {
      console.log(error);
    }
  }

  onMessage (message) {
    console.log('onMessage', message)
  }

  onClose () {
    const id = parseInt(this.request.qs.id);
    users.removeUser( id );
  }

  onError () {
    console.log('onError');
  }

}

module.exports = SocketManagerController
