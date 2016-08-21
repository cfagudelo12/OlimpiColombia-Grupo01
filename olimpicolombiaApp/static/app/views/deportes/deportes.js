(function() {

	var app = angular.module('app');

	app.factory('Deporte', function($resource) {
		return $resource('/api/deportes');
	});

	app.controller('DeportesCtrl', function($scope, Deporte) {
		$scope.deportes = Deporte.query();
		console.log("Deportes", $scope.deportes);
	});

})();