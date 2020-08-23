'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {

    static get table () {
        return 'Message'
    }
}

module.exports = Message
