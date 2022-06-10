(defun make-dp (matrix)
  (labels ((make-0-list (length)
             (if (= length 0)
                 nil
                 (cons 0 (make-0-list (- length 1)))))
           (make-dp (pre-row rest-matrix)
             (if rest-matrix
                 (let ((row (make-row (cons 0 pre-row) 0 (car rest-matrix))))
                   (cons row (make-dp row (cdr rest-matrix))))
                 nil))
           (make-row (rest-pre-row pre-sum rest-row)
             (if rest-row
                 (let ((shadow (car rest-row))
                       (corner (car rest-pre-row))
                       (top (cadr rest-pre-row))
                       (left pre-sum))
                   (let ((current (+ shadow top left (- corner))))
                     (cons current
                           (make-row (cdr rest-pre-row)
                                     current
                                     (cdr rest-row)))))
                 nil)))
    (make-dp (make-0-list (length (car matrix))) matrix)))
