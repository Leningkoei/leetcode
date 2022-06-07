;;;; 0473
;;;; medium
;;;; Matchsticks to Square
;;;; 2022/06/01

;;; You are given an integer array `matchsticks` where `matchsticks[i]` is the
;;; length of the `i ^ th` matchstick. You want to use all the matchsticks to
;;; make one square. You should not break any stick, but you can link them up,
;;; and each matchstick must be used exactly one time.
;;; Return `true` if you can make this square and `false` otherwise.

(defun make-square (matchsticks)
  (let ((target (/ (apply '+ matchsticks) 4)))
    (labels ((iterator (rest-matchsticks top right bottom left)
               (if (or (> top target)    (> right target)
                       (> bottom target) (> left target))
                   nil
                   (if rest-matchsticks
                       (let ((delta (car rest-matchsticks))
                             (next (cdr rest-matchsticks)))
                         (or (iterator next (+ delta top) right bottom left)
                             (iterator next top (+ delta right) bottom left)
                             (iterator next top right (+ delta bottom) left)
                             (iterator next top right bottom (+ delta left))))
                       t))))
      (iterator matchsticks 0 0 0 0))))
