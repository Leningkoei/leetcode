(defun is-power-of-four (n)
  (if (= n 1)
    T
    (do ((current 4 (* current 4)))
        ((>= current n) (= current n)))))

