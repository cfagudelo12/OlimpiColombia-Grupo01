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

	function controller($scope, $timeout, Login) {

		Login.watchUser(function (user) {
			$scope.usuario = user;
		})

		$scope.loginFaceboook = function () {
			console.log("Trying to loggin with face");
			Login.facebookLogin();
		}
		$scope.logout = function () {
			Login.logout();
		}


	}

})();