(function() {
    'use strict';

    var app = angular.module('demoApp');

    var injects = [];

    var Controller = function() {
        var vm = this;

        vm.data = [{
            data1: 'value1',
            data2: 'value2',
            data3: 'value3',
            data4: 'value4',
            data5: 'value5',
            data6: 'value6'
        }];
    };

    app.controller('DemoController', injects.concat([Controller]));
})();
