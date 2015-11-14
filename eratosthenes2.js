/* 
   The Sieve of Eratosthenes using a javascript array as
   an associative data structure.
*/

function range(start, limit, step) {
    var rangeArray = [];
    while(start < limit) {
        rangeArray.push(start);
        start = start + step;
    }
    return rangeArray;
}

function isNotNull(value) { // predicate for filtering
    if (value !== null)
        return true;
    else
        return false;
}

function nullMultiples(multiple, array) { // mutates array
    var step = multiple;
    while(multiple < array.length) {
        array[multiple] = null;
        multiple = multiple + step;
    }
}

function nextPrime(currentPrime, array) {
    var successor = currentPrime++;
    while (array[successor] === null)
        successor++;
    return successor;
}

function primes(below) {
   var initSet = range(0, below, 1);
   var primeSet = []; // set of numbers used as a multiple
   var currentPrime = initSet[2]; // the first multiple is 2
   while (currentPrime < Math.sqrt(initSet.length)) {
       primeSet.push(currentPrime);
       nullMultiples(currentPrime, initSet); // mutate initSet
       currentPrime = nextPrime(currentPrime, initSet); 
   }
   // return the numbers that were used as multiples and all
   // inidicies that still contain a number, except 0 and 1
   return primeSet.concat(initSet.slice(2).filter(isNotNull));
}
