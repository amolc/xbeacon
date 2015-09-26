var baseUrl = "http://node.fountaintechies.com:8001/api/";
//var baseUrl = "http://localhost:8001/app/";
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
   // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
   // for form inputs)
   if (window.cordova && window.cordova.plugins.Keyboard) {
     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
     cordova.plugins.Keyboard.disableScroll(true);

   }
   if (window.StatusBar) {
     // org.apache.cordova.statusbar required
     StatusBar.styleDefault();
   }


  if( window.cordova && cordova.plugins.locationManager ){
    alert('5:27');
    var logToDom = function (message) {
      var e = document.createElement('label');
      e.innerText = message;
      console.log( message );
      var br = document.createElement('br');
      var br2 = document.createElement('br');
      document.getElementById("listbbbbbbb").appendChild(e);
      document.getElementById("listbbbbbbb").appendChild(br);
      document.getElementById("listbbbbbbb").appendChild(br2);

      var beacon = {
        'beacon_uuid' : message.uuid,
        'beacon_proximity' : message.proximity,
        'beacon_rssi' : message.rssi,
        'beacon_accuracy' : message.accuracy,
        'user_identifier' : message.identifier
      }
      $http.post( baseURL + 'activity/new', beacon).success(function(res, req) { });

     var delegate = new cordova.plugins.locationManager.Delegate();

     delegate.didDetermineStateForRegion = function (pluginResult) {

         logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

         cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
             + JSON.stringify(pluginResult));
     };

     delegate.didStartMonitoringForRegion = function (pluginResult) {
         console.log('didStartMonitoringForRegion:', pluginResult);

         logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
     };

     delegate.didRangeBeaconsInRegion = function (pluginResult) {
         //logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
         if( pluginResult.beacons.length > 0 ){
           logToDom(  pluginResult.beacons[0] );
         }
     };


     var beaconRegion = new cordova.plugins.locationManager.BeaconRegion('Doctor1', 'FDA50693-A4E2-4FB1-AFCF-C6EB07647825', 10001, 12544);
     var beaconRegion2 = new cordova.plugins.locationManager.BeaconRegion('Doctor2', 'FDA50693-A4E2-4FB1-AFCF-C6EB07647825', 2000, 3000);
     cordova.plugins.locationManager.setDelegate(delegate);

     // required in iOS 8+
     cordova.plugins.locationManager.requestWhenInUseAuthorization();
     // or cordova.plugins.locationManager.requestAlwaysAuthorization()

     cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
         .fail(console.error)
         .done();
     cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion2)
         .fail(console.error)
         .done();







   }
 });
})

.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider

   .state('app', {
   url: '/app',
   abstract: true,
   templateUrl: 'templates/menu.html',
   controller: 'AppCtrl'
 })

 .state('app.search', {
   url: '/search',
   views: {
     'menuContent': {
       templateUrl: 'templates/search.html'
     }
   }
 })

 .state('app.browse', {
     url: '/browse',
     views: {
       'menuContent': {
         templateUrl: 'templates/browse.html'
       }
     }
   })
   .state('app.playlists', {
     url: '/playlists',
     views: {
       'menuContent': {
         templateUrl: 'templates/playlists.html',
         controller: 'PlaylistsCtrl'
       }
     }
   })

 .state('app.single', {
   url: '/playlists/:playlistId',
   views: {
     'menuContent': {
       templateUrl: 'templates/playlist.html',
       controller: 'PlaylistCtrl'
     }
   }
 });
 // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/app/playlists');
});
