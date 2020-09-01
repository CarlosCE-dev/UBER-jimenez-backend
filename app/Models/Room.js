'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {

    static get table() {
        return 'Room'
    }
    static get primaryKey() {
        return 'Id'
    }

    Messages() {
        return this.hasMany('App/Models/Message', 'Id', 'RoomId')
    }

    Delivery() {
        return this.belongsTo('App/Models/User', 'DeliveryId', 'Id')
    }

    Client() {
        return this.belongsTo('App/Models/User', 'ClientId', 'Id')
    }

}

module.exports = Room
