/**
 * Created by nicolashe on 1/20/2016.
 */

(function () {

    angular.module('bk.demo', []);
    angular.module('bk.demo').controller('demoController', demoController);

    demoController.$inject = ['$scope', '$timeout'];
    function demoController($scope, $timeout) {
        $timeout(function () {
            $scope.demoTime = Date.now();
        }, 1000)
    }
})()