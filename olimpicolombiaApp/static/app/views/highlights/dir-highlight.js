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
            console.log("Nueva url de video ", nuevaUrl);
            if(nuevaUrl) {
                var source = document.getElementById('videoMP4');
                source.setAttribute('src', nuevaUrl);
                var video = videojs("video");
                video.load();
                video.play();

            }
        });
    }

})();