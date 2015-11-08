// Sieve of Eratosthenes

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

function bangOnMap(number, map) {
    var incriment = number;
    while (map[number] < existsIn(number, map)) {
        map[number] = "composite";
        number = number + incriment;
    }
}

function primes(below) {
    
}
