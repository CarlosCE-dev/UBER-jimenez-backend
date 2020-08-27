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

    Permission() {
        return this.hasOne('App/Models/Permission', 'PermissionId', 'Id')
    }

    User() {
        return this.belongsTo('App/Models/User', 'UserId', 'Id')
    }
}

module.exports = Role
