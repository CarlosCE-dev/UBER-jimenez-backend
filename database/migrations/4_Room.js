'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('Room', (table) => {
      table.increments('Id')
      table.integer('UserId').notNullable().unsigned().references('Id').inTable('User')
      table.integer('ClientId').notNullable().unsigned().references('Id').inTable('User')
      table.datetime('Created')
      table.datetime('Updated')
      table.boolean('Status').notNullable().defaultTo(true)
    })
    this.raw("ALTER TABLE `Room` CHANGE COLUMN `Created` `Created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, CHANGE COLUMN `Updated` `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;")
  }

  down () {
    this.drop('Room')
  }
}

module.exports = RoomSchema
