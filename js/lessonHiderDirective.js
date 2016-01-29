var app = angular.module('directivePractice');

app.directive('lessonHider', function() {
  return {
    templateUrl: './js/lessonHider.html', //lessonHider.html position referenced from the index.html file since the template is being invoked from the directive elements within index.html.
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attrs) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            element.css('text-decoration', 'line-through');
            scope.lessonDay = schedule.weekday;
            return;
          }
        });
      });
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
