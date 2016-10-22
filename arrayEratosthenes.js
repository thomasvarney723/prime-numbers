
function primesLessThan(n) {
    if(typeof n !== 'number' || n < 0)
	throw new Error('Argument must be a non-negative integer.');
    
    var intArr = Array(n);
    
    intArr[0] = intArr[1] = false;  // 0 and 1 are not primes
    
    var current = 2;
    while(current < Math.sqrt(n)) {
	for(var i = current * current; i < n; i += current) 
	            intArr[i] = false;  // eliminate multiples of current
	current++;
	while(intArr[current] === false)  // get the next prime
	    current++;
	}
    
    var primes = [2];  // collect the primes
    for(var j = 3; j < intArr.length; j += 2) {
	if(intArr[j] === undefined)
	    primes.push(j);
	}
    
    return primes;
}
