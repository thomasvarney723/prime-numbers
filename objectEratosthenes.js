function primeMap(below) {
    var amap = {};
    for(var i = 2; i < below; i++)
        amap[i] = null;
    return amap;
}

function objKeys2Array(map) {
    var array = [];
    for(var keys in map)
        array.push(keys);
    return array;
}

function existsIn(number, map) {
    if (map[number] === undefined)
        return false;
    else 
        return true;
}

function lessThanSqrt(number, map) {
    var length = objKeys2Array(map).length;
    var last = length + 1;
    if (number < Math.sqrt(last))
        return true;
    else
        return false;
}

function mutateMapWithComposites(number, map) {
    var incriment = number;
    while (existsIn(number, map)) {
        map[number] = "composite";
        number = number + incriment;
    }
}

function nextPrime(currentPrime, map) {
    var keys = objKeys2Array(map);
    while (map[currentPrime] === "composite")
        currentPrime++;
    return currentPrime;
}

function pushRemainingPrimes(map, array) {
    var i = 2;
    while(existsIn(i, map)) {
        if(map[i] === null)
            array.push(i);
        i++;
    }
    return array;
}

function primes(below) {
    var primeSet = [];
    var map = primeMap(below);
    var currentPrime = 2;
    while (lessThanSqrt(currentPrime, map)) {
        primeSet.push(currentPrime);
        mutateMapWithComposites(currentPrime, map);
        currentPrime = nextPrime(currentPrime, map);
    }
    pushRemainingPrimes(map, primeSet);
    return primeSet;
}
