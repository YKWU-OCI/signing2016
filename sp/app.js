angular.module('app', ['signature']);

angular.module('app').controller('AppCtrl', function($scope) {
    $scope.boundingBox = {
        width: 400,
        height: 300
    };
});