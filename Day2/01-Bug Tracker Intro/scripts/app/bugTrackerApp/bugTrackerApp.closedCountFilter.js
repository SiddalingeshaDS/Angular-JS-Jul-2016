
    angular.module('bugTrackerApp').filter('closedCount',function(){
        return function(data){
            var result = 0;
            for(var i=0; i < data.length; i++)
                if(data[i].isClosed)
                    ++result;
            return result;
        }
    });
    angular.module('bugTrackerApp').filter('closedCount',function($filter){
        var builtinFilter = $filter('filter');
        return function(bugs){
            return builtinFilter(bugs,{isClosed : true}).length;
        }
    });

	bugTrackerApp.filter('closedCount', function(){
		return function(bugs){
			return bugs.filter(function(bug){
				return bug.isClosed;
			}).length;
		}
	});
	
	bugTrackerApp.filter('closedCount', function(){
		return function(bugs){
			return bugs.reduce(function(result, bug){
				return bug.isClosed ? ++result : result;
			},0);
		}
	});
        