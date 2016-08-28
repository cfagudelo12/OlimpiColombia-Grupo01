(function() {

	var app = angular.module('app');

	app.factory('Usuario', function($resource) {
		return $resource('/api/usuarios/:idUsuario',{idUsuario:"@idUsuario"});
	});

})();