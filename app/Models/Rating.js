'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rating extends Model {

    static get table() {
        return 'Rating'
    }

    static get primaryKey() {
        return 'Id'
    }

    User(){
        return this.belongsTo('App/Models/User', 'UserId', 'Id')
    }

    Rater() {
        return this.belongsTo('App/Models/User', 'UserId', 'Id')
    }
}

module.exports = Rating
