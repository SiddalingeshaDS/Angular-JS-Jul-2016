	angular.module('bugTrackerApp').controller('bugsController', function($scope,bugStorage){
		$scope.bugs = bugStorage.getAll();
		$scope.addBug = function(newBugName){
//            var newBug = {
//                name : newBugName,
//                isClosed: false
//            };
            var newBug = bugStorage.add(newBugName);
			$scope.bugs.push(newBug);
		};
		$scope.toggleBug = function(bug){
//			bug.isClosed = !bug.isClosed;
            bugStorage.toggle(bug);
		};
        $scope.setSelectedBug = function(bug){
            $scope.selectedBug = bug;
        };
        $scope.removeClosed = function(bugs){
            for(var i=bugs.length - 1, len = 0; i >= len; i--){
                if(bugs[i].isClosed){
                    bugStorage.remove(bugs[i])
                    bugs.splice(i,1);
                }
            }
        };
	});
