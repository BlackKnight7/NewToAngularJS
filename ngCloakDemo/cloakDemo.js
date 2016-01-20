/**
 * Created by nicolashe on 1/20/2016.
 */

(function () {

    angular.module('bk.demo', []);

    angular.module('bk.demo').controller('demoController', demoController)

    demoController.$inject = ['$scope']

    function demoController($scope) {
        $scope.demoTitle = 'wtf..................wtf..........................wtf........................';
    }
})()