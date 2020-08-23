'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('Message', (table) => {
      table.increments('Id')
      table.string('Body', 1000).notNullable()
      table.integer('UserId').notNullable().unsigned().references('Id').inTable('User')
      table.integer('RoomId').notNullable().unsigned().references('Id').inTable('Room')
      table.datetime('Created')
      table.datetime('Updated')
      table.boolean('Status').notNullable().defaultTo(true)
    })
    this.raw("ALTER TABLE `Message` CHANGE COLUMN `Created` `Created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, CHANGE COLUMN `Updated` `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;")
  }

  down () {
    this.drop('Message')
  }
}

module.exports = MessageSchema
