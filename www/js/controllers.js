angular.module('starter.controllers', [])

.controller('homeCtrl', function($rootScope, $scope, $ionicLoading, $ionicFilterBar, EventsAPI){
	$ionicLoading.show();

	EventsAPI.loadEvents().then(function(response) {
		$ionicLoading.hide();

	    /* ion-filter-bar begins */
	    var filterBarInstance;
		$scope.events = response.events_list;

		$scope.showFilterBar = function () {
			filterBarInstance = $ionicFilterBar.show({
	      		/*
				- do not change 'items' attribute's name. 
				- the name is fixed with the plugin.
				*/
				items: $scope.events,
				update: function (filteredEvents, filterText) {
					$scope.events = filteredEvents;
					if (filterText) {
						console.log(filterText);
					}
				}
			});
		};
	    /* ion-filter-bar ends */
	})
});