app.controller('profileCtrl', function($scope, $rootScope) {

  $scope.email = JSON.parse(localStorage.getItem('currentUser')).email;

});
