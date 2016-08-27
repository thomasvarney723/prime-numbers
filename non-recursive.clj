(defn primes [below]
  (remove (into #{} (mapcat #(range (* % %) below %))
                (range 3 (Math/sqrt below) 2))
          (cons 2 (range 3 below 2))))
