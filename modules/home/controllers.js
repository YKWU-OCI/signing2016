'use strict';
<!--
angular.module('Home'[]);

.controller('HomeController',
    ['$scope',
    function ($scope) {

    }]);
-->

angular.module('Home').controller('SignModalCtrl', [
  '$scope', '$modalInstance'
  function ($scope, $modalInstance) {
    $scope.done = function () {
      var signature = $scope.accept();

      if (signature.isEmpty) {
        $modalInstance.dismiss();
      } else {
        $modalInstance.close(signature.dataUrl);
      }
    };
  }
]);