/**
 * Created by tgdev on 26/01/16.
 */


(function () {

    angular.module('bk.demo', []);
    angular.module('bk.demo').controller('demoController', demoController);

    demoController.$inject = ['$scope', '$timeout', 'DataFactory'];
    function demoController($scope, $timeout, DataFactory) {
        var getDataRequest;

        $scope.cancel = function () {
            getDataRequest.abort();
        }

        $scope.send = function () {
            getDataRequest = DataFactory.getData();
            getDataRequest.then(function (result) {
                // do something with result.
                console.log(result);
            })
        }
    }
})()