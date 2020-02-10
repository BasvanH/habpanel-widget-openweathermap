(function () {
	'use strict';
	angular
		.module('app.widgets.owm', [])
		.controller('ngOwmCtrl', ['$rootScope', '$scope', 'OHService',
			function ($rootScope, $scope, OHService) {
				// Fill the three forecast days with data
				function loadOwmForecast() {
					console.log("Processing OWM widget forecast");
					try {
						var today = new Date();
						var hoursToNoon = (24 - today.getHours()) + 12;
						for (var day = 0; day < 4; day++) {
							setForecastItems(day, getClosest(hoursToNoon + (day * 24)));
						}
					} catch (err) {
						console.log("Error during OWM widget: " + err)
					}
                                }

				// Set forecast values for particular day
				function setForecastItems(day, hour) {
					$scope["temp" + day] = $scope.itemState('Weather_OWM_Temp_h' + hour);
					$scope["condition" + day] = $scope.itemState('Weather_OWM_Condition_h' + hour);
					$scope["condition_id" + day] = $scope.itemState('Weather_OWM_ConditionId_h' + hour);
					$scope["date_time" + day] = $scope.itemState('Weather_OWM_DateTime_h' + hour);
				}

				// Find closest to value in array
				function getClosest(goal) {
					var hours = Array.from(Array(32).keys(), (h) => (h + 1) * 3);  // Generate array with stepsize 3 until 96
					var closest = hours.reduce(function (prev, curr) {
						return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
					});

					return closest
				}

				// Run function when an items updates
				$rootScope.$on('openhab-update', function (event, item) {
					loadOwmForecast();
				});

				loadOwmForecast();
			}
		]);
})();
