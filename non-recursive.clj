(defn primes< [n]
  (if (<= n 2)
    ()
    (remove (into #{}
                  (comp
                   (mapcat #(range (* % %) n %))
                   (remove even?))
                  (range 3 (Math/sqrt n) 2))
            (cons 2 (range 3 n 2)))))
