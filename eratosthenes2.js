/* 
   The Sieve of Eratosthenes using a javascript array as
   an associative data structure.
*/

function range(start, limit, step) {
    var rangeArray = [];
    for (var i = start; i < limit; i += step)
        rangeArray.push(i);
    return rangeArray;
}

function isNotNull(value) { // predicate for filtering
    if (value !== null)
        return true;
    else
        return false;
}

function nullMultiples(multiple, array) { // mutates array
    var step = multiple + multiple;
    while (step < array.length) {
        array[step] = null;
        step = step + multiple;
    }
}

function nextPrime(currentPrime, array) {
    var successor = currentPrime + 1;
    while (array[successor] === null)
        successor++;
    return successor;
}

function primes(below) {
   var initSet = range(0, below, 1);
   var currentPrime = initSet[2]; // the first multiple is 2
   while (currentPrime < Math.sqrt(initSet.length)) {
       nullMultiples(currentPrime, initSet); // mutate initSet
       currentPrime = nextPrime(currentPrime, initSet); 
   }
   // return inidicies that still contain a number, except 0 and 1
   return initSet.slice(2).filter(isNotNull);
}
