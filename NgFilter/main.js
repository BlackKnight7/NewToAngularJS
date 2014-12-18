var myApp = angular.module("myApp", []);

myApp.factory('Avengers', function () {
    var Avengers = {};
    Avengers.cast = [
        {
            name: "Clack Gregg",
            character: "Agent Phil Coulson"
        },
        {
            name: "Samuel L. Jackson",
            character: "Selving"
        }
    ]
    return Avengers;
})

myApp.controller('AvengersCtrl', ['$scope', 'Avengers', function ($scope, Avengers) {
    $scope.avengers = Avengers;
}])