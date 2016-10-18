function primesLessThan(n) {
    if(typeof n !== 'number' || n < 0)
	throw new Error('Argument must be a non-negative integer.');
    
    var intArr = Array(n).fill(true); // initialize array to be all prime
    
    intArr[0] = intArr[1] = false; // 0 and 1 are not primes
    
    var current = 2;
    while(current < Math.sqrt(n)) {
	for(var i = current * current; i < n; i += current) // mutate composite indicies
	    intArr[i] = false;
	current++;
	while(intArr[current] !== true) // get next prime number
	    current++;
	}
    
    var primeNumbers = []; // collect the primes
    intArr.forEach(function(elm, idx, arr) {  
	if(elm === true)
	    primeNumbers.push(idx);
	});
    
    return primeNumbers;
}
