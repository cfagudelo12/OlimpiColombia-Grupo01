(function() {

    var app = angular.module('app');

    var mockupDeportistasService = [{
                id: 1,
                idDeporte: 1,
                nombre: "Caterine Ibargüen",
                lugarNacimiento: "Lugar",
                fechaNacimiento: new Date("1984-07-23"),
                edad: 23,
                peso: 67,
                estatura: 1.85,
                entrenador: 'Julio',
                urlImagen: 'http://www.elheraldo.co/sites/default/files/2015/08/24/articulo/caterine_ibarguen_2.jpg',
                urlVideo: 'https://www.youtube.com/embed/wvZpnSPUy34'
            }];

    app.factory('Deportista', function($resource) {
        var resource = $resource('/api/deportes/:deporteId/deportistas');
        var model = {};
        model.query = function(params) {
            return mockupDeportistasService;
        };
        model.get = function (params) {
            return mockupDeportistasService[0];
        };
        return model;
    });

})();