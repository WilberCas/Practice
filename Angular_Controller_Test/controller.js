var app = angular.module('MyApp', []);
app.controller('MyController',function($scope){
    $scope.name = "Wilber";
    $scope.firstName = "Wilber";
    $scope.lastName = "Castaneda";
    $scope.changeName = function(){
        $scope.name = 'Castaneda';
    }
    $scope.result = calculation(2,2);
});

function calculation(  num1, num2  ){
    return num1+num2;
}

app.controller('SecondController',function($scope){
    $scope.firstName_ = "Wilber";
    $scope.lastName_ = "Castaneda";
});