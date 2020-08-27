'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {

    static get table() {
        return 'Message'
    }

    static get primaryKey() {
        return 'Id'
    }

    Room() {
        return this.belongsTo('App/Models/Room', 'RoomId', 'Id')
    }
}

module.exports = Message
