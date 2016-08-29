(function() {

	var app = angular.module('app');
	app.directive('dirHeader', function() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'static/app/views/header/header.html',
			controller: controller
		};
	});

	function controller($scope,Login) {
		Login.get().$promise.then(function (usuario) {
			$scope.usuario = usuario;
			console.log("usuario", usuario);
		});
	}

})();