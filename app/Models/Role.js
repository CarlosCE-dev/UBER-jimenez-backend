'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {

    static get table() {
        return 'Role'
    }

    static get primaryKey() {
        return 'Id'
    }

}

module.exports = Role
