angular.module('bugTrackerApp', ['utils','ngRoute']);
angular
			.module('bugTrackerApp')
			.config(function($routeProvider){
				$routeProvider
					.when('/list', {
						template : '<bugs></bugs>'
					})
					.when('/new', {
						template : '<new-bug></new-bug>'
					})
                    .when('/details/:id', {
				        template : '<bug-details></bug-details>'
                    })
					.otherwise({
						redirectTo : '/list'
					});
			});
