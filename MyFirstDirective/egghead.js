var egghead = angular.module('egghead', []);

egghead.controller('AppCtrl', function () {
    var app = this;
    app.message = 'hello';
})

egghead.directive('myFirstDirective', function () {
    return function (scope, elements, attrs) {
        //console.log(scope.app.message);
        elements.text(scope.app.message + " " + attrs.message);
    }
})