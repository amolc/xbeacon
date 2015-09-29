angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$ionicModal,$timeout,$http, $state) {

  $scope.emailid = window.localStorage.getItem('emailid') || null;
  console.log($scope.emailid);
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};



  $scope.logout = function(){
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('emailid');
    window.localStorage.removeItem('username');
    $state.go('app.playlists');
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function(res, req) {
    console.log('Doing login', $scope.loginData);

     //$http.post(baseUrl + 'user/loginuser', $scope.loginData).success(function(res, req){

                    window.localStorage.setItem('emailid',$scope.loginData.email_id);
                    window.localStorage.setItem('username',$scope.loginData.username);
                    $state.go('app.playlists');



    $timeout(function() {
      //$scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function( $scope, $rootScope, $ionicPlatform ) {



$scope.playlists = [
    
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
