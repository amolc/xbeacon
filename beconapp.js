// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'becon';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ui.router']);

mainApplicationModule
.run(function($rootScope, $state ) {

});

mainApplicationModule.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $stateProvider
    

    .state('becon_user_list',{
        url:'/becon_user_list',
        authRequired : false,
        templateUrl:'templates/becon_user_list.html'
    });
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