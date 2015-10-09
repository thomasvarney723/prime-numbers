(defn all-fn [below] 
  (into (sorted-set) 
        (range 2 (inc below) 1)))

(defn make-mults [number limit]
  (into (sorted-set)
   (take-while
    #(< % (inc limit))
    (iterate (partial + number) number))))

(defn primes [below]
  (let [all (all-fn below)
        diffe clojure.set/difference
        union clojure.set/union
        inte  clojure.set/intersection]
  (loop [chosen (sorted-set 2)
         composites (make-mults 2 below)]
   (let [next-prime (first (into (sorted-set) (remove composites all)))]
      (if (> (last chosen) (Math/sqrt below))
        (union (diffe all composites) chosen)
        (recur (conj chosen next-prime)
               (union composites (make-mults next-prime below))))))))
