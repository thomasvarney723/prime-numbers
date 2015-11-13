function range(start, limit, step) {
    var rangeArray = [];
    while(start < limit) {
        rangeArray.push(start);
        start = start + step;
    }
    return rangeArray;
}

function isNull(value) {
    if (value === null)
        return false;
    else
        return true;
}

function nullMultiples(multiple, array) {
    var step = multiple;
    while(multiple < array.length) {
        array[multiple] = null;
        multiple = step + multiple;
    }
}

function nextPrime(currentPrime, array) {
    var successor = currentPrime++;
    while (true) {
        if (array[successor] === null)
            successor++;
        else
            return successor;
    }
}

function primes(below) {
   var initSet = range(0, below, 1);
   var primeSet = [];
   var currentPrime = initSet[2];
   while (currentPrime < Math.sqrt(initSet.length)) {
       primeSet.push(currentPrime);
       nullMultiples(currentPrime, initSet);
       currentPrime = nextPrime(currentPrime, initSet);
   }
   return primeSet.concat(initSet.slice(2).filter(isNull));
}
