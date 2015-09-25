// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'beacon';

var baseUrl = "http://node.fountaintechies.com:8001/api";
// Create the main application
var xbeaconApp = angular.module('beacon', ['ui.router']);

xbeaconApp.run(function($rootScope, $state ) {

});

xbeaconApp.config( function($urlRouterProvider, $stateProvider) {

    $stateProvider

    .state('becon_user_list',{
        url:'/becon_user_list',
        templateUrl:'templates/becon_user_list.html',
        controller: 'deviceController'
    })

    .state('device_list',{
        url:'/device_list',
        templateUrl:'templates/becon_user_list.html',
        controller: 'deviceController'
    })

    $urlRouterProvider.otherwise('/appbecon_user_list');
});

xbeaconApp.controller('MainController', function($scope, $cookieStore, $http, $stateParams, $location, $rootScope, $state) {
        console.log("In main Becon controller");
    });
