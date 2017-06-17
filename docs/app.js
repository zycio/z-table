(function() {
    'use strict';

    var app = angular.module('demoApp', [
        'z-table'
    ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['demoApp'], {
            strictDi: false
        });
    });
})();
