(function() {

'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', lunchCheckController);
  lunchCheckController.$inject = ['$scope', '$filter'];

  function lunchCheckController($scope, $filter) {
    $scope.message = "";
    $scope.displayMessage = function() {
      var count = checkDishCount($scope.dishes);
      if (count == 0) {
        $scope.message = "Please enter data first";
        $scope.messageColor = "red";
        $scope.textBoxBorderColor = "red";
      } else if (count <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageColor = "green";
        $scope.textBoxBorderColor = "green";
      } else {
        $scope.message = "Too much!";
        $scope.messageColor = "green";
        $scope.textBoxBorderColor = "green";
      }
    };
  };

  /**
   * Check dish count.
   */
  function checkDishCount(dishes) {
    // check if user input is empty:
    var count = 0;
    if (dishes) {
      // do NOT consider any empty item towards to the total count
      var arr = dishes.split(",");
      for (var i = 0; i < arr.length; ++i) {
        if (arr[i].trim().length > 0) ++count;
      }
    }
    return count;
  }

})();
