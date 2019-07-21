'use strict'
const Question = use('App/Models/Question')
const Database = use('Database')
class QuestionController {
    
    async index ({response}) {
        try {
            let questions = await Question.all()
            return response.json(questions)
        } catch (error) {
            return response.status(400).json({
                    "message":"failed"
            })

        }
    }
    async show ({params, response}) {
        try {
            const question = await Database.from('questions').where({ number: params.number })
            const countAll = await Question.query().count()
            let question_count = countAll[0]['count(*)']
            if (!question) {
                return response.status(404).json({"message": 'Resource not found'})
            }
            return response.json({
                question:question,
                question_count:question_count
            })
        } catch (error) {
            return response.status(400).json({"message": 'failed'})
            
        }
    }

    async store ({request, response}) {
        try {
        const questionData = request.all(['number', 'description', 'type','options','answer','timer'])
        const question = await Question.create(questionData)
        return response.status(201).json(question)
            
        } catch (error) {
            return response.status(400).json({
                "message":"failed"
            })
        }

    }
}

module.exports = QuestionController
