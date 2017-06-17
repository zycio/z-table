(function() {
    'use strict';

    var modal = angular.module('z-table');

    var injects = ['$templateCache'];

    var Templates = function($templateCache) {
        $templateCache.put('table.html',
            '<div class="z-table">\
                <div class="z-table-header">\
                    <div class="z-table-cell"\
                         ng-repeat="(name, value) in data[0]"\
                         ng-bind="name"></div>\
                </div>\
                <div class="z-table-row" ng-repeat="item in data">\
                    <div class="z-table-cell" ng-repeat="value in item">\
                        {{value}}\
                    </div>\
                </div>\
            </div>'
        );
    };

    modal.run(injects.concat([Templates]));
})();
