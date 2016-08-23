(function() {

    var app = angular.module('app');
    app.directive('dirDeporte', function() {
        return {
            restrict: 'E',
            scope: {
            	deporte: "="
            },
            templateUrl: 'static/app/views/deportes/dir-deporte.html',
            controller: controller
        };
    });

    function controller($scope, Deporte) {
    }

})();