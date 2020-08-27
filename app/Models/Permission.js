'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Permission extends Model {

    static get table() {
        return 'Permission'
    }

    static get primaryKey() {
        return 'Id'
    }

    Role() {
        return this.belongsTo('App/Models/Role', 'RoleId', 'Id')
    }
}

module.exports = Permission
