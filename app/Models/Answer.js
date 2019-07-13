'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    static get createdAtColumn () {
        return null;
      }
    
      static get updatedAtColumn () {
        return null;
      }
    
        users(){
            return this.belongsToMany('App/Models/User')
              .pivotTable('answers')
          }
        
        question() {
            return this.belongsTo('App/Models/Question')
        }
}


module.exports = Answer
