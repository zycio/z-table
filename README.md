z-table
=====================

Z-table - simple table directive for AngularJS.

See demo at [zycio.github.io/z-table/](https://zycio.github.io/z-table/).

## Usage
Install with bower

```bash
bower install --save z-table
```

Then reference the css files
```css
<link rel="stylesheet" href="bower_components/z-table/dest/z-table.min.css" /> />
```

Then reference the js files
```html
<script src="bower_components/z-table/dest/z-table.min.js"></script>
```

Inject z-table to your application
```js
var app = angular.module('myApp', ['z-table']);
```

Create controller with data
```js
app.controller('MyAppController', ['$scope', function($scope) {
    $scope.data = [{
        name1: 'value1',
        name2: 'value2'
        name3: 'value3'
    }];
}]);
```

Use directive in html
```html
<z-table data="data"></z-table>
```

## Releasing
```bash
bower install
npm install
grunt dest
```
