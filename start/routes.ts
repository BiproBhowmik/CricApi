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

//over storing
Route.post('/storeOver', 'OversController.store')

//ball storing
Route.post('/storeBall', 'BallsController.store')

//every ball details by id
Route.post('/ballDetails', 'BallsController.ballDetails')

//show a specific user full details with batting and bowling strategy details by id
Route.post('/showUser', 'UsersController.show') 

//specific over details with ball to ball by id
Route.post('/overDetails', 'OversController.overDetails')