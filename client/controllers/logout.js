app.controller('logoutCtrl', function($scope, $auth, $rootScope, $window, $location) {

  $scope.logout = function() {

    $auth.logout()
      .then(function(response) {
        console.log(response);
        // $window.localStorage.currentUser = // clear local storage
        $rootScope.currentUser = null;
        $location.path('/home');
      })
      .catch(function(response) {
        console.log(response);
      });
  };

});
