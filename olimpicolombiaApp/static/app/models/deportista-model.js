(function() {

    var app = angular.module('app');

    app.factory('Deportista', function($resource) {
        return $resource('/api/deportes/:idDeporte/deportistas/:idDeportista',{idDeporte:"@idDeporte",idDeportista:"@idDeportista"});
    });

})();