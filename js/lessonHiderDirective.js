var app = angular.module('directivePractice');

app.directive('lessonHider', function() {
  return {
    templateUrl: './js/lessonHider.html', //lessonHider.html position referenced from the index.html file since the template is being invoked from the directive elements within index.html.
    restrict: 'E',
    scope: {
      lesson: '='
    },
    link: function(scope, element, attrs) {
    }
  };
});

/* scope options:
scope: {
    twoWayDataBinding: '=',
    stringBinding: '@',
    functionBinding: '&'
}
*/
