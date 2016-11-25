//include Immutable CDN
var i = Immutable;

function primesLessThan(n) {
    if(n <= 2)
	return [];

    var oddsAnd2 = i.OrderedSet([2]).concat(i.Range(3, n, 2));
    function multiplesOf(o) {
	return i.Range(o * o, n, o);
    }
    var oddsToSqrt = i.Range(3, Math.sqrt(n), 2);
    var composites = i.Set(oddsToSqrt.flatMap(multiplesOf));
    return oddsAnd2.subtract(composites);
}
