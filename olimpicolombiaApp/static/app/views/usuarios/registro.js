/**
 * Created by Davinci on 27/08/2016.
 */
(function() {

	var app = angular.module('app');

	app.controller('RegistroCtrl', function($scope, Usuario) {
	    console.log("asdasd")
		$scope.user = {}
        
		$scope.registrar = function (user) {
            var usuario = new Usuario(user)

            usuario.$save()
        }
	});

})();
