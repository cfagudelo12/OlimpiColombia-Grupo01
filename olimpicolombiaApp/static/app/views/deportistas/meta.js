(function() {

    var app = angular.module('app');

	app.factory('Meta', function() {
    	var metas = [];
        function getMetas() {
            return metas;
        }
        function addToMetas(url) {
        	metas.push(url);
		}
        return {
            addToMetas: addToMetas,
            getMetas: getMetas
        };
    });

	app.controller('MetaCtrl',function ($scope, Meta) {
		$scope.metas = Meta.getMetas();
        $scope.cosa ={"valor":"valor"};
        console.log("EXISTO",$scope.cosa);
	});
})();