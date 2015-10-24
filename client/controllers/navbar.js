app.controller('navbarCtrl', function($scope, $window, $auth, $location) {

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  $scope.logout = function() {
    $auth.logout();
    delete $window.localStorage.currentUser;
    $location.path('/');
  };

});
