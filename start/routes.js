'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.get('users', 'UserController.index')
  Route.get('user/:id', 'UserController.show')
  Route.post('user','UserController.store')
  
  Route.get('questions', 'QuestionController.index')
  Route.get('question/:number', 'QuestionController.show')
  Route.post('question', 'QuestionController.store')

  Route.post('answer', 'AnswerController.store')
  Route.get('answer/:user_id', 'AnswerController.show')

}).prefix('api/v1')
