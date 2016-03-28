(defn lazy-primes []
  "Lazily produces primes by trail division."
  (letfn [(mods [n]
            (map #(mod n %)
                 (range 2 (inc (Math/sqrt n)))))]
    (cons 2
          (remove #(apply (some-fn zero?) (mods %))
                  (iterate #(+ % 2) 3)))))
