// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'beacon';

var baseUrl = "http://node.fountaintechies.com:8001/api";
// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ui.router']);

mainApplicationModule
.run(function($rootScope, $state ) {

});

mainApplicationModule.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $stateProvider
    
    .state('becon_user_list',{
        url:'/becon_user_list',
        templateUrl:'../templates/becon_user_list.html',
        controller: 'deviceController'
    });
    
    $urlRouterProvider.otherwise('/appbecon_user_list');
}]);

angular.module(mainApplicationModuleName).controller('MainController', [
    '$scope',
    '$http',
    '$stateParams', 
    '$location', 
    '$rootScope',
    '$state',    
    function($scope, $cookieStore, $http, $stateParams, $location, $rootScope, $state) {
        console.log("In main Becon controller");
    }]);