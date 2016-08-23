(function() {

	var app = angular.module('app');

	app.factory('Evento', function($resource) {
		return $resource('/api/deportistas/:idDeportista/eventos',{idDeportista:"@idDeportista"});
	});
})();