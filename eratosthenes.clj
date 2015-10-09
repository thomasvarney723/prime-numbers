(defn all-fn [below] (into (sorted-set) (range 2 (inc below) 1)))
;; (def all #{2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32})                                                 
(def all (all-fn 32))

(defn make-mults [number limit]
  (into
   (sorted-set)
   (take-while
    #(< % (inc limit))
    (iterate (partial + number) number))))

(def primes32 (conj (diffe
       all
       (union
        (make-mults 2 32)
        (make-mults 3 32)
        (make-mults 5 32))) 
      5 3 2))

(def mult-sets #(make-mults % 32))

(def diffe clojure.set/difference)
(def union clojure.set/union)
(def inte  clojure.set/intersection)


(defn next-prime-num [sett0] 
  (first (into (sorted-set) (remove sett all))))


(defn primes2 [below]
  (let [alle (all-fn below)]
  (loop [chosen (sorted-set 2)
         composites (make-mults 2 below)]
   (let [next-prime (first (into (sorted-set) (remove composites all)))]
      (if (> (last chosen) (Math/sqrt below))
        (union (diffe alle composites) chosen)
        (recur (conj chosen next-prime)
               (union composites (make-mults next-prime below))))))))
