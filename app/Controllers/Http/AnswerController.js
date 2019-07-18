'use strict'
const Answer = use('App/Models/Answer')
class AnswerController {

    async show ({response , params}) {
        const answer = await Answer.query()
        .with('question')
        .where({ user_id: params.user_id })
        .fetch()
        return response.status(201).json(answer)
    }

    async store ({request, response}) {
        const answerInfo = request.only(['question_id', 'user_id', 'answer','attachment'])
        const answer = new Answer()
        answer.question_id = answerInfo.question_id
        answer.user_id = answerInfo.user_id
        answer.answer = answerInfo.answer
        answer.attachment = answerInfo.attachment
        await answer.save()
        return response.status(201).json(answer)
    }
}

module.exports = AnswerController
