'use strict'
const Answer = use('App/Models/Answer')
class AnswerController {

    async show ({response , params}) {
        
        try {
            const answer = await Answer.query()
            .with('question')
            .where({ user_id: params.user_id })
            .fetch()
            return response.status(201).json(answer)
        } catch (error) {
            return response.status(400).json({
                "message":"Failed"
            })        
        }
    }

    async store ({request, response}) {
        try {
        const answerData = request.all(['question_id', 'user_id', 'answer','attachment'])
        const answer = await Answer.create(answerData)
            return response.status(201).json(answer)
            
        } catch (error) {
            return response.status(400).json({
                "message":"Failed"
            })
        }

    }
}

module.exports = AnswerController
