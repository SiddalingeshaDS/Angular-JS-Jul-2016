    // Custom Module Creation
	var utils = angular.module('utils', []);
    utils.value('defaultTrimLength',20);
    utils.filter('trimText',function(defaultTrimLength){
        return function(data, trimLength){
            trimLength = trimLength || defaultTrimLength;
            return data.length < trimLength ? data : data.substring(0,trimLength) + '...';
        }
    });
