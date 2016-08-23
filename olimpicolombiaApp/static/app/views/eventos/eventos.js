(function() {

	var app = angular.module('app');

	app.controller('EventosCtrl', function($scope, $sce, $routeParams, Deporte, Deportista, Evento) {
		$scope.trustSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		};
		$scope.deportista = Deportista.get({
			idDeportista: $routeParams.idDeportista
		});
        $scope.deporte = Deporte.get({
		    idDeporte: $scope.deportista.idDeporte
        })
		$scope.eventos = Evento.query({
			idDeportista: $routeParams.idDeportista
		});
        $scope.dateFormat = function (fecha) {
			moment.locale('es');
			return moment(fecha).format('DD [de] MMMM [de] YYYY');
		};
		$scope.hourFormat = function (fecha) {
		    moment.locale('es');
		    return moment(fecha).format("h:MM");
        }
		// $scope.eventos = Evento.query();
	});

})();