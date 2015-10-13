app.controller('navbarCtrl', function($scope, $rootScope, $window, $auth) {

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  $scope.logout = function() {
    $auth.logout();
    delete $window.localStorage.currentUser;
  };

});
