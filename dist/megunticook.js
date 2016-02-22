var megunticook = (function () {
    'use strict';
        
    var simpleReArgs = {
        requireReturn: 0,
        bookValuePerShareAtTime0 : 0,
        valuePerShareAtTime0 : 0,
        earningsPerShareAtTime1 : 0,
        earningsPerShareAtTime2 : 0,
        dividendAtTime1 : 0
    };
    
    var getSimpleReValue = function(simpleReArgs)
    {
        
        return simpleReArgs.valuePerShareAtTime0;
    };
    
    return {
        simpleReArgs : simpleReArgs,
        getSimpleReValue : getSimpleReValue
    };
}());