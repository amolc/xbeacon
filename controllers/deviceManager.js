angular.module(xbeaconApp).controller('deviceManager',
    function($rootScope, $scope, $stateParams, $location, $http, $state, $timeout) {

          /**
          @function findAll
          @type get
          @author Ankush Lomte
          @initialDate  25 Sept 2015 Ankush Lomte 7.30 PM
          @lastDate
          */
          console.log("Heloooo deviceManager");
          $scope.findAll = function() {
            $http.get(baseUrl + '/user/getalldevices').success(function(res, req){
              console.log("in devices list");
              //console.log(res);
              $scope.devices = res.record;
              console.log($scope.devices);
              if( res.status == true ){
                console.log("devices list. ");
              } else if(res.status === false){
                console.log("devices list failed");
                $scope.message = "devices list failed";
              }
            }).error(function() {
              console.log("Connection Problem.");
            });
          };

          $scope.findAll();


    }
);