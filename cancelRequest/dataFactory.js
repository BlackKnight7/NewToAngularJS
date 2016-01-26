/**
 * Created by tgdev on 26/01/16.
 */

(function () {

    angular.module('bk.demo').factory('DataFactory', function ($http, $q) {
        function getData(id) {
            var deferredAbort = $q.defer();

            var request = $http({
                method: 'get',
                url: 'http://localhost:3000/api/v1/healthcheck',
                timeout: deferredAbort.promise
            });

            var promise = request.then(
                function (response) {
                    return ( response.data );
                },
                function () {
                    return ( $q.reject('Something went wrong') );
                }
            );

            promise.abort = function () {
                deferredAbort.resolve();
            };

            var timeout = setTimeout(function () {
                deferredAbort.resolve();
            }, 2000);

            promise.finally(
                function () {
                    promise.abort = angular.noop;
                    deferredAbort = request = promise = null;
                    timeout();
                }
            );

            return ( promise );
        }

        return ({
            getData: getData
        });

    });
})();


