'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleSchema extends Schema {
  up () {
    this.create('Role', (table) => {
      table.increments('Id')
      table.string('Name', 200).notNullable()
      table.integer('PermissionId').notNullable().unsigned().references('Id').inTable('Permission')
      table.datetime('Created')
      table.datetime('Updated')
      table.boolean('Status').notNullable().defaultTo(true)
    })
    this.raw("ALTER TABLE `Role` CHANGE COLUMN `Created` `Created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, CHANGE COLUMN `Updated` `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;")
  }

  down () {
    this.drop('Role')
  }
}

module.exports = RoleSchema
