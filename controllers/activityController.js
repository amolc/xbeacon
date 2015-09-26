angular.module(xbeaconApp).controller('activityController',
    function($rootScope, $scope, $stateParams, $location, $http, $state, $timeout) {

          /**
          @function findAll
          @type get
          @author Ankush Lomte
          @initialDate  25 Sept 2015 Ankush Lomte 1.20 PM
          @lastDate
          */
          console.log("Heloooo");
          $scope.findAll = function() {
            $http.get(baseUrl + 'activity').success(function(res, req){
              console.log("in beconactivitys list");
              //console.log(res);
              $scope.beconactivitys = res.records;
              console.log($scope.beconactivitys);
              if( res.status === true ){
                console.log("beconusers list. ");
              } else if(res.status === false){
                console.log("beconusers list failed");
                $scope.message = "beconusers list failed";
              }
            }).error(function() {
              console.log("Connection Problem.");
            });
          };

          $scope.findAll();


    }
);




