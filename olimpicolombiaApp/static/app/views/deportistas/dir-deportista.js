(function() {

    var app = angular.module('app');
    app.directive('dirDeportista', function() {
        return {
            restrict: 'E',
            scope: {
            	deportista: "="
            },
            templateUrl: 'static/app/views/deportistas/dir-deportista.html',
            controller: controller
        };
    });

    function controller($scope, Deportista) {
    }

})();