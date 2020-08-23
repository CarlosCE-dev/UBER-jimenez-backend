'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingSchema extends Schema {
  up () {
    this.create('Rating', (table) => {
      table.increments('Id')
      table.integer('Value').notNullable().comment('1=Very bad, 2=Bad, 3=Normal, 4=Good, 5=Very good')
      table.integer('RaterId').notNullable().unsigned().references('Id').inTable('User')
      table.integer('UserId').notNullable().unsigned().references('Id').inTable('User')
      table.datetime('Created')
      table.datetime('Updated')
      table.boolean('Status').notNullable().defaultTo(true)
    })
    this.raw("ALTER TABLE `Rating` CHANGE COLUMN `Created` `Created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, CHANGE COLUMN `Updated` `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;")
  }

  down () {
    this.drop('Rating')
  }
}

module.exports = RatingSchema
