/**
 * Created by Davinci on 27/08/2016.
 */
(function() {

	var app = angular.module('app');

	app.controller('RegistroCtrl', function($scope, Usuario) {

		$scope.user = {}
        
		$scope.registrar = function (user) {
            var usuario = new Usuario(user)
			$scope.exito = {'mensaje':''}
			$scope.error = {'mensaje':''}
            usuario.$save(
            	function(data) {
            		$scope.exito = {'mensaje':'Guardado con éxito'}
				},
				function(error) {
            		$scope.error = {'mensaje':'Error en el formulario!!'}
				})
			return
		}
	});

})();
