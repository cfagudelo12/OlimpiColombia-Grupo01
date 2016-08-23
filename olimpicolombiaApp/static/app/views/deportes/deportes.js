(function() {

	var app = angular.module('app');

	app.controller('DeportesCtrl', function($scope, Deporte) {
		$scope.deportes = Deporte.query();
	});

})();