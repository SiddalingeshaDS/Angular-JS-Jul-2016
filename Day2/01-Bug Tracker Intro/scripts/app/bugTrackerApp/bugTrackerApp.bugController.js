	angular.module('bugTrackerApp').controller('bugsController', function($scope,bugOperations){
		$scope.bugs = [
			bugOperations.create('Unable to write to the local storage'),
			bugOperations.create('User actions not recognized'),
			bugOperations.create('Server communication failure')
		];
		$scope.addBug = function(newBugName){
//            var newBug = {
//                name : newBugName,
//                isClosed: false
//            };
            var newBug = bugOperations.create(newBugName);
			$scope.bugs.push(newBug);
		};
		$scope.toggleBug = function(bug){
//			bug.isClosed = !bug.isClosed;
            bugOperations.toggle(bug);
		};
        $scope.setSelectedBug = function(bug){
            $scope.selectedBug = bug;
        };
        $scope.removeClosed = function(bugs){
            for(var i=bugs.length - 1, len = 0; i >= len; i--){
                if(bugs[i].isClosed)
                    bugs.splice(i,1);
            }
        };
	});
