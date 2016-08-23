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
	var roorDir = 'static/app/views/';


	var app = angular.module('app', ['ngResource', 'ngRoute']);
	app.config(function($routeProvider, $httpProvider) {
		moment.locale('es');
		$routeProvider
			.when('/', {
				controller: 'DeportesCtrl',
				templateUrl: roorDir + 'deportes/deportes.html'/*,
				resolve: {
					loggedin: checkLoggedin
				}*/
			})
			.when('/:idDeporte', {
				controller: 'DeportistasCtrl',
				templateUrl: roorDir + 'deportistas/deportistas.html'/*,
				resolve: {
					loggedin: checkLoggedin
				}*/
			})
			.when('/deportistas/:idDeportista', {
				controller: 'EventosCtrl',
				templateUrl: roorDir + 'eventos/eventos.html'/*,
				resolve: {
					loggedin: checkLoggedin
				}*/
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