var app = angular.module('aboutApp', []);


  var counter = -1;
  $scope.description = describe[0];
  $interval(function(){
    if(counter < describe.length - 1)
      counter++;
    else
      counter = 0;
    $scope.description = describe[counter];
  }.bind(this), 1000);
});
