function primesLessThan(n) {
    if(n <= 2)
	return [];

    var oddsAnd2 = _.concat([2], _.range(3, n, 2));
    var oddsToSqrt = _.range(3, Math.sqrt(n), 2);
    function multiplesOf(x) {
	return _.range(x * x, n, x);
    }
    var composites = _.flatMap(oddsToSqrt, multiplesOf);
    
    return _.filter(oddsAnd2, doesNotContain(composites));
}

function doesNotContain(arr) {
    return function(elem) {
	return !_.includes(arr, elem);
    };
}
