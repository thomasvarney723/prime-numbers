function primesLessThan(n) {
    if(n <= 2)
	return [];

    var composites = range(3, Math.sqrt(n), 2)
    .map(function(x) {
	    return range(x * x, n, x);
	})
    .reduce(concat, []);
    var data = [2].concat(range(3, n, 2));
    return data.filter(doesNotContain(composites));
}

function range(start, end, step) {
    var result = [];
    for(var i = start; i < end; i += step)
	result.push(i);
    return result;
}

function concat(a, b) {
    return a.concat(b);
}

function doesNotContain(arr) {
    return function(elem) {
	return !(arr.indexOf(elem) > -1);
    };
}
