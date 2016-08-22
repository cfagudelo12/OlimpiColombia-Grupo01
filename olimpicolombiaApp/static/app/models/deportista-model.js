(function() {

	var app = angular.module('app');

	app.factory('Deportista', function($resource) {
		var resource = $resource('/api/deportes/:deporteId/deportistas');
		var model = {};
		model.query = function(params) {
			return [{
				nombre: "Caterine Ibargüen",
				lugarNacimiento: "Lugar",
				fechaNacimiento: new Date("2012-05-23"),
				edad: 23,
				peso: 67,
				estatura: 1.85,
				entrenador: 'Julio',
				urlImagen: 'http://www.elheraldo.co/sites/default/files/2015/08/24/articulo/caterine_ibarguen_2.jpg',
				urlVideo: 'https://www.youtube.com/embed/wvZpnSPUy34'
			}];
		};
		return model;
	});

})();