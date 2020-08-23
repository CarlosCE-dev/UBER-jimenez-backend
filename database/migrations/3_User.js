'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up () {
    this.create('User', (table) => {
      table.increments('Id')
      table.string('Name', 80).notNullable()
      table.string('LastName', 80).nullable()
      table.string('SecondLastName', 80).nullable()
      table.string('Password', 200).notNullable()
      table.string('Email', 100).nullable()
      table.string('Phone', 45).nullable()
      table.string('UserImage', 300).nullable()
      table.integer('RoleId').notNullable().unsigned().references('Id').inTable('Role')
      table.datetime('Created')
      table.datetime('Updated')
      table.boolean('Status').notNullable().defaultTo(true)
    })
    this.raw("ALTER TABLE `User` CHANGE COLUMN `Created` `Created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, CHANGE COLUMN `Updated` `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;")
  }

  down () {
    this.drop('User')
  }
}

module.exports = UserSchema
