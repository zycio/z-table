(function() {
    'use strict';

    var modal = angular.module('z-table');

    var injects = [];

    var Directive = function() {
        return {
            restrict: 'E',
            templateUrl: 'table.html',
            replace: true,
            scope: {
                data: '='
            }
        };
    };

    modal.directive('zTable', injects.concat([Directive]));
})();
