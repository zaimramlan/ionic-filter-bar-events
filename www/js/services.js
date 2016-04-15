angular.module('starter.services', [])

.factory('EventsAPI', function($http, $q){
	var baseLink = 'http://www.zaimramlan.com/api_kira/';

	return {
		loadEvents: function() {
			var deferred = $q.defer();
			
			$http.get(baseLink + 'getEvents.php').then(function(response) {
				deferred.resolve({
					events_list: response.data.events_list
				});
			}, function(err) {
				deferred.reject();
			});

			return deferred.promise;
		}
	}
})

.service('BlankService', [function(){

}]);