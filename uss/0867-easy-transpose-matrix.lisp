;;; ((1 2 3)
;;;  (4 5 6))
;;; ((1 4)
;;;  (2 5)
;;;  (3 6))

(defun transpose (matrix)
  (labels ((iterator-2 (col-index rest-row)
             (if rest-row
                 (cons (nth col-index (car rest-row))
                       (iterator-2 col-index
                                   (cdr rest-row)))
                 nil))
           (iterator (col-index rest-col)
             (if rest-col
                 (cons (iterator-2 col-index matrix)
                       (iterator (+ col-index 1) (cdr rest-col)))
                 nil)))
    (iterator 0 (car matrix))))

(defun test ()
  (let ((list (list (list 1 2 3) (list 4 5 6))))
    (transpose list)))
