(defn recursive [below]
  "Eagerly returns all the prime numbers less than below."
  (let [limit (Math/sqrt below)]
    (loop [sieve (range 3 below 2)
           x 3
           primes (transient [2])]
      (let [sieved (remove (set (range (* x x) below x)) sieve)
            primed (first sieved)]
        (if (< limit x)
          (concat (persistent! primes) sieved)
          (recur (rest sieved)
                 primed
                 (conj! primes primed)))))))
