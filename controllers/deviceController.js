angular.module(xbeaconApp).controller('deviceController',
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
            $http.get(baseUrl + '/user/getallusers').success(function(res, req){
              console.log("in beconusers list");
              //console.log(res);
              $scope.beconusers = res.record;
              console.log($scope.beconusers);
              if( res.status == true ){
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
