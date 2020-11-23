var app = angular.module('cryptoApp', []);
app.controller('cryptoCtrl', function($scope, $http) {
    var getData = function() {
        return $http( {
            method: 'GET',
            url: '/crypto'
        }).then(function successCallback(response) {
            $scope.cryptos = response.data;
            //console.log("script response: "  + response.data);
        }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
    };
    getData();   

    
    
    $scope.parseFloat = function(value)
    { 
        return parseFloat(value.replace(/,/g, ''));      
    }
});





