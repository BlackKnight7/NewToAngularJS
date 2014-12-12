angular.module("MyModule", []);

angular.module("MyModule").controller("FirstCtrl", ['$scope', function ($scope) {
    $scope.data = {message: "Hello"};
}])
