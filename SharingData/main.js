var myApp = angular.module("myApp", []);

myApp.factory('Data', function () {
    return {message: "I'm data from service"};
})

myApp.controller("FirstCtrl", ['Data', '$scope', function (Data, $scope) {
    $scope.data = Data;
}])

myApp.controller("SecondCtrl", ['Data', '$scope', function (Data, $scope) {
    $scope.data = Data;
}])
