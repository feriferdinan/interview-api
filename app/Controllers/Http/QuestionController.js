'use strict'
const Question = use('App/Models/Question')
const Database = use('Database')
class QuestionController {
    
    async index ({response}) {
        let questions = await Question.all()
        return response.json(questions)
    }
    async show ({params, response}) {
        const questions = await Database.from('questions').where({ number: params.number })
        if (!questions) {
            return response.status(404).json({data: 'Resource not found'})
            }
        return response.json(questions)
    }
}

module.exports = QuestionController
