(function() {

	var app = angular.module('app');

	app.controller('DeportistasCtrl', function($scope, $sce, $routeParams, Deporte, Deportista) {
		$scope.trustSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		};
		$scope.deporte = Deporte.get({
			idDeporte: $routeParams.idDeporte
		});
		console.log("$routeParams.idDeporte", $routeParams.idDeporte)
		$scope.deportistas = Deportista.query({
			idDeporte: $routeParams.idDeporte
		});
		$scope.dateFormat = function (fecha) {
			moment.locale('es');
			return moment(fecha).format('DD [de] MMMM [de] YYYY');
		};
	});

})();