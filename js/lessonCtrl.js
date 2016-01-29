var app = angular.module('directivePractice');

app.controller('lessonCtrl', function($scope) {

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) {
    if (day === undefined) {
      alert('This lesson is not in the schedule.');
    }
    else {
      alert(lesson + ' is active on ' + day + '.');
    }
  };
});
