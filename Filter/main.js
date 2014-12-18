var myApp = angular.module("myApp", []);

myApp.filter("reverse", function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
})

myApp.factory('Data', function () {
    return {message: "I'm data from service"};
})

myApp.controller("FirstCtrl", ['Data', '$scope', function (Data, $scope) {
    $scope.data = Data;
}])

myApp.controller("SecondCtrl", ['Data', '$scope', function (Data, $scope) {
    $scope.data = Data;

    $scope.reversedMessage = function (message) {
        return message.split("").reverse().join("");
    }
}])
