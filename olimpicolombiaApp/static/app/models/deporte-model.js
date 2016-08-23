(function() {

	var app = angular.module('app');

	app.factory('Deporte', function($resource) {
		return $resource('/api/deportes/:idDeporte',{idDeporte:"@idDeporte"});
	});

})();