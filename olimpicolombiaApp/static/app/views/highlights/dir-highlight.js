(function() {

    var app = angular.module('app');
    app.directive('dirHighlight', function() {
        return {
            restrict: 'E',
            scope: {
            	url: "="
            },
            templateUrl: 'static/app/views/highlights/dir-highlight.html',
            controller: controller
        };
    });

    function controller($scope) {
        $scope.$watch("url",function (nuevaUrl) {
            console.log("Nue", nuevaUrl);
            if(nuevaUrl) {
                setTimeout(function () {
                videojs("video");
                },1000);

            }
        });
    }

})();