(function() {

	var app = angular.module('app');

	app.factory('Evento', function($resource) {
		var resource = $resource('/api/deportistas/:idDeportista/eventos',{idDeportista:"@idDeportista"});
		var model = {};
		model.query = function(params) {
			return [{
				fecha_hora: new Date("2016-08-14"),
				modalidad: "Triple salto femenino",
				resultado: "1"
			}];
		};
		return resource;
	});
})();