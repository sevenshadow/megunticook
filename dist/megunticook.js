define([] , function () {
        
        var simpleResidualEarningsModelArgs = {
            requireReturn: 0,
            bookValuePerShareAtTime0 : 0,
            valuePerShareAtTime0 : 0,
            earningsPerShareAtTime1 : 0,
            earningsPerShareAtTime2 : 0,
            dividendAtTime1 : 0
        };
        
        var publicApi = {
            simpleResidualEarningsModelArgs : simpleResidualEarningsModelArgs
        };
        
        return publicApi;
    
});