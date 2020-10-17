(function(){
  // create a directive
  var app = angular.module("myApp", []);

  // creates a controller called MainCtrl
  app.controller('MainCtrl', ['$scope','$http', function($scope, $http) {
    // function called if search() is successful
    var onSuccess = function(response){
      $scope.user = response.data;
    }

    // function called if search() is fails
    var onError = function(response) {
      $scope.error = "Could not fetch data";
    }

    // function called once the form is submitted
    $scope.search = function(username) {
      var promise = $http.get("https://api.github.com/users/" + username);
      promise.then(onSuccess, onError);
    };

  }]);


})();
