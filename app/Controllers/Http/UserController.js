'use strict'
const User = use('App/Models/User')
const Answer = use('App/Models/Answer')
class UserController {

    async index ({response}) {
        let users = await User.all()
        return response.json(users)
    }
    async store ({request, response}) {
        const userInfo = request.only(['username', 'email', 'phone_number'])
        const user = new User()
        user.username = userInfo.username
        user.email = userInfo.email
        user.phone_number = userInfo.phone_number
        await user.save()

        // const users = await User.all()

        // const userIds = users.rows.map(user => {
        // return user.id
        // })

        // const {answer} = request.only(['answer'])
        // const answe = await Answer.create({
        //     answer
        //   })
      
        //   await answe.users().attach(userIds)

        return response.status(201).json(user)
    }
    async show ({params, response}) {
        const user = await User.find(params.id)
        if (!user) {
            return response.status(404).json({data: 'Resource not found'})
            }
        return response.json(user)
    }

    async update ({params, request, response}) {
        const userInfo = request.only(['username', 'email', 'phone_number'])
        const user = await User.find(params.id)
         if (!user) {
            return response.status(404).json({data: 'Resource not found'})
            }
            user.username = userInfo.username
            user.email = userInfo.email
            user.phone_number = userInfo.phone_number
            await user.save()
            return response.status(200).json(user)
    }
    async delete ({params, response}) {
        const user = await User.find(params.id)
        if (!user) {
        return response.status(404).json({data: 'Resource not found'})
        }
        await user.delete()
        return response.status(204).json({'messages': 'data deleted'})
        }
}

module.exports = UserController
