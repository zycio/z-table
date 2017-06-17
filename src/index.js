(function() {
    'use strict';

    var modal = angular.module('z-table', []);

    var injects = ['$compileProvider'];

    var Config = function($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    };

    modal.config(injects.concat([Config]));
})();
