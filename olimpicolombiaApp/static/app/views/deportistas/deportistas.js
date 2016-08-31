(function() {

	var app = angular.module('app');

	app.controller('DeportistasCtrl', function($scope, $sce, $routeParams, $location, $http, Deporte, Deportista, Login) {
		var idDeportistaSelected = $location.search().idDeportista;

		$scope.accessToken=Login.accessToken();
		$scope.userId=Login.userId();
		$scope.trustSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		};
		$scope.deporte = Deporte.get({
			idDeporte: $routeParams.idDeporte
		});
		$scope.deportistas = Deportista.query({
			idDeporte: $routeParams.idDeporte
		})
		$scope.deportistas.$promise.then(function () {
			$scope.deportistas.forEach(function (deportista) {
				if(deportista.id == idDeportistaSelected){
					$scope.deportistaSelected=deportista;
				}
			})
		});
		$scope.dateFormat = function (fecha) {
			moment.locale('es');
			return moment(fecha).format('DD [de] MMMM [de] YYYY');
		};
		$scope.deportistaSelected=null;
		$scope.selectDeportista = function (deportista) {
			console.log("deportista selected ", deportista)
			$scope.deportistaSelected=deportista;
			$location.search('idDeportista', deportista?deportista.id:null);
		}
		$scope.darUrlVideo = function(deportista){
			var url = location.protocol + '//' + location.hostname + '/#/deportes/'+ $routeParams.idDeporte + '?idDeportista=' + deportista.id;
			console.log("URL VIDEO: ", url)
			return url
		}
	});

})();