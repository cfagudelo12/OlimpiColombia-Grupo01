(function() {

	var app = angular.module('app');

	app.factory('Evento', function($resource) {
	    //TODO especificar el id
		return $resource('/api/deportistas/:id/calendario');
	});

	app.controller('EventosCtrl', function($scope, Evento) {
		// $scope.eventos = Evento.query();
        $scope.eventos = Evento.query();
		console.log("Eventos", $scope.eventos);
	});

})();