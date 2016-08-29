(function() {

	var app = angular.module('app');

	app.factory('Login', function($resource) {
		return $resource('/api/login/loggedin');
	});

})();