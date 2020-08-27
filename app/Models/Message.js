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
}

module.exports = Message
