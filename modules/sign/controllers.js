'use strict';

angular.module('Sign').controller('SignController', [
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
