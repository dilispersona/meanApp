var Resource = require('resourcejs');
module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '', route, app.models.movie).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
/*var restful = require('node-restful');
 // Setup the controller for REST.

 module.exports = function (app, route){
 	
 	var rest = restful.model(
 		'movies',
 		app.models.movie
 		).methods(['get', 'put', 'post', 'delete']);

 	  // Register this endpoint with the application.
 	  rest.register(app, route);

 	  return function(req, res, next){
 	  	next();
 	  };
 	}
*/

