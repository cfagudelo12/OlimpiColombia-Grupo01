app = angular.module('olimpicolombia', ['ngResource']);

app.factory('Deporte', function ($resource) {
    return $resource('/api/deportes')
})

app.controller('AppController', function ($scope, Deporte) {
    $scope.deportes=Deporte.query();
})