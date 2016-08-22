(function() {

	var app = angular.module('app');

	app.controller('EventosCtrl', function($scope, Evento) {
		// $scope.eventos = Evento.query();
        $scope.eventos = Evento.query();
		console.log("Eventos", $scope.eventos);
	});

})();