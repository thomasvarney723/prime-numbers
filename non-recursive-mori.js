;; include mori CDN
var m = mori;

function primesLessThan(n) {
  var oddsAnd2 = m.cons(2, m.range(3, n, 2)); 
  function multiplesOf(o) {
      return m.range(o * o, n, o)
  }
  var oddsToSqrt = m.range(3, Math.sqrt(n), 2);
  var composites = m.into(m.set([]), m.mapcat(multiplesOf), oddsToSqrt); 
                                     //uses a transducer!
  return m.remove(composites, oddsAnd2);
}
