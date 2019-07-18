'use strict'
const Question = use('App/Models/Question')
const Database = use('Database')
class QuestionController {
    
    async index ({response}) {
        let questions = await Question.all()
        return response.json(questions)
    }
    async show ({params, response}) {
        const question = await Database.from('questions').where({ number: params.number })
        const countAll = await Question.query().count()
        let question_count = countAll[0]['count(*)']
        if (!question) {
            return response.status(404).json({data: 'Resource not found'})
            }
        return response.json({
            question:question,
            question_count:question_count
        })
    }
}

module.exports = QuestionController
