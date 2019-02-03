(function() {
  'use strict';
  angular
  .module('app', [])
  .controller('ngOwmCtrl', ['$scope', '$interval', function($scope, $interval) {

		function loadOwmForecast() {
			try {
				var today = new Date();
				var nextDay = new Date();
				
				for (var day = 0; day < 4; day++) {
					nextDay.setDate(today.getDate()+day);
					nextDay.setHours(12);
					var diffHours = Math.ceil(Math.abs(today.getTime() - nextDay.getTime()) / (1000 * 3600));
					setForecastItems(day, getClosest(diffHours));
				}

			} catch(err) {
				console.log("Error during OWM widget: " + err)
			}
		}

		function setForecastItems(day, hour) {
			$scope["temp" + day] = $scope.itemState('Weather_OWM_Temp_h' + hour);
			$scope["condition" + day] = $scope.itemState('Weather_OWM_Condition_h' + hour);
			$scope["condition_id" + day] = $scope.itemState('Weather_OWM_ConditionId_h' + hour);
			$scope["date_time" + day] = $scope.itemState('Weather_OWM_DateTime_h' + hour);
		}

		function getClosest(goal) {
				var hours = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 41, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96];

				var closest = hours.reduce(function(prev, curr) {
					return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
				});

				return closest
		}

		$interval(function() {			// First load
				loadOwmForecast();
		}, 500, 1);

		$interval(function() {			// Update interval
				loadOwmForecast();
		}, 30000);

  }]); 
})();
