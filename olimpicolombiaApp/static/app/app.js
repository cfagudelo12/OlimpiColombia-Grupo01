(function() { 
//var app = angular.module('app', [ 'autoDisplay', 'ngFileUpload'])

	var checkLoggedin = function($q, $timeout, $http, $location, $rootScope, User) {
		var deferred = $q.defer();
		$http.get('/loggedin').success(function(user) {
			if (user === '0') {
				$timeout(function() {
					deferred.reject();
				}, 0);
				if ($location.url() !== '/') {
					$location.url('/');
				}
			} else {
				$timeout(deferred.resolve, 0);
				User.setUser(user);
			}
		});
	};


	var app = angular.module('app', ['ngResource', 'ngRoute']);
	app.config(function($routeProvider, $httpProvider) {
		moment.locale('es');
		$routeProvider
			.when('/', {
				controller: 'DeportesCtrl',
				templateUrl: 'static/app/views/deportes/deportes.html'/*,
				resolve: {
					loggedin: checkLoggedin
				}*/
			})
			.when('/:idDeporte', {
				controller: 'AdminCtrl',
				templateUrl: 'app/admin/admin.html'/*,
				resolve: {
					loggedin: checkLoggedin
				}*/
			})
			.when('/deportistas/:id/calendario', {
				controller: 'EventosCtrl',
				templateUrl: 'static/app/views/eventos/eventos.html'
			})
			.otherwise({
				controller: 'LoginCtrl',
				templateUrl: 'app/login/login.html',
				resolve: {
					loggedin: checkLoggedin
				}
			});
	});

})();