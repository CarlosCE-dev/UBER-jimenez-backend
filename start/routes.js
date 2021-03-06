'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    Route.resource('message', 'MessageController');

    Route.resource('room', 'RoomController');

    Route.resource('user', 'UserController');

    /* -------------------------------------------------------------------------- */
    /*                                Rating Routes                               */
    /* -------------------------------------------------------------------------- */
    Route.get('rating/:id', 'RatingController.getRating');
    Route.post('rating/:id', 'RatingController.setRating');

    
}).prefix('api/v1');
