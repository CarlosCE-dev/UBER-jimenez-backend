'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {

  static get table() {
    return 'User'
  }
  
  static get primaryKey() {
    return 'Id'
  }

  Role() {
    return this.hasOne('App/Models/Role', 'RoleId', 'Id')
  }

  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

}

module.exports = User
