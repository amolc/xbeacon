angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$ionicModal,$timeout,$http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();

};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(res, req) {
    console.log('Doing login', $scope.loginData);
     window.localStorage.setItem('emailid',$scope.loginData.emailid);
     // $http.post(baseUrl + 'beaconapi/loginuser', $scope.loginData).success(function(res, req){
     //              console.log(res);
     //              if( res.status == true ){
     //                window.localStorage.setItem('user_id',res.record[0].user_id);
     //                AuthService.isAuthenticated = true;
     //                console.log("Login true.............");
     //                  var user = {
     //                  'login': true,
     //                  'username': res.record[0].username,
     //                  'useremail': res.record[0].useremail,
     //                };
     //                $cookieStore.put('user', user);
     //                //$location.path('/listrepresentatives');
     //                $scope.init();
     //                $state.go('listrepresentatives');
     //                console.log($scope.userCookie);
     //              } else if(res.status === false){
     //                console.log("login failed");
     //                $scope.message = "Wrong Email or Password Combination";
     //              }
     //            }).error(function() {
     //              console.log("Connection Problem.");
     //            });
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function( $scope, $rootScope, $ionicPlatform ) {

  

$scope.playlists = [
    { title: 'Reggae', id: 1 },
    /*{ title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }*/

  ];
   /*$scope.doLogout = function(res, req) {
   localStorage.clear();
   $state.go('/app');
  };*/
})

.controller('PlaylistCtrl', function($scope, $stateParams, $state) {

  $scope.doLogout = function(res, req) {
   localStorage.clear();
   $state.go('/playlists');
  };
});
