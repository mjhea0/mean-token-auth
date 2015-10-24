app.controller('profileCtrl', function($scope, $rootScope, $http, $window) {

  $scope.email = JSON.parse(localStorage.getItem('currentUser')).email;
  $scope.newEmail = $scope.email;

  $scope.updateUser = function(email, password) {
    $scope.message = "";
    // create payload
    var payload = {};
    payload.email = email;
    payload._id = JSON.parse(localStorage.getItem('currentUser'))._id;
    if(password) {
      payload.password = password;
    }
    // send XHR request
    $http.put('/auth/update', payload)
      .success(function (data, status) {
        if(status === 200 && data){
          delete $window.localStorage.currentUser;
          $window.localStorage.currentUser = JSON.stringify(data);
          $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          $scope.email = JSON.parse(localStorage.getItem('currentUser')).email;
          $scope.message = "Updated!";
          $scope.password = "";
        } else {
          console.log('handle error');
        }
      })
      .error(function (err) {
        console.log('handle error: ', err);
      });
  };

});
