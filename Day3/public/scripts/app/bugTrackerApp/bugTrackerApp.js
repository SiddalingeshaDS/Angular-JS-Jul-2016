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
					.otherwise({
						redirectTo : '/list'
					});
			});
