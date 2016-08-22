(function() {

	var app = angular.module('app');

	app.factory('Evento', function($resource) {
	    //TODO especificar el id
		return $resource('/api/deportistas/:id/calendario');
	});
})();