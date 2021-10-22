/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.post('/storeUser', 'UsersController.store') //store user
Route.post('/showUser', 'UsersController.show') //show a specific user full details with batting and bowling details  by id

//over storing
Route.post('/storeOver', 'OversController.store')



//ball storing
Route.post('/storeBall', 'BallsController.store')



//1. how many runs a better got and ball faced
Route.post('/gottenRunFacedBall', 'BallsController.gottenRunFacedBall')

//2. how many runs a bowler gave and how many balls do
Route.post('/bowlerGivenRuns', 'OversController.bowlerGivenRuns')

//3. ball by ball analysis scoring.. kun dike koto run
Route.post('/ballDetails', 'BallsController.ballDetails')

