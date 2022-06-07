(defun enumerate-interval (low high)
  (if (> low high)
      nil
      (cons low (enumerate-interval (+ low 1) high))))
(defun filter (predicate sequence)
  (cond ((not sequence) nil)
        ((funcall predicate (car sequence))
         (cons (car sequence) (filter predicate (cdr sequence))))
        ('t (filter predicate (cdr sequence)))))
(defun accumulate (op initial sequence)
  (if sequence
      (funcall op
               (car sequence)
               (accumulate op initial (cdr sequence)))
      nil))
(defun flatmap (proc seq)
  (accumulate 'append nil (map 'list proc seq)))

(defun adjoin-position (row col rest-of-queens)
  (cons (list row col) rest-of-queens))
(defun safe? (k positions) (declare (ignore k))
  (let ((current (car positions))
        (precurt (cdr positions)))
    (flet ((check (p1 p2)
             (let ((p1-x (car p1))
                   (p1-y (cadr p1))
                   (p2-x (car p2))
                   (p2-y (cadr p2)))
               (let ((delta-x (- p1-x p2-x))
                     (delta-y (- p1-y p2-y)))
                 (let ((k (/ delta-x delta-y)))
                   (and (not (= p1-x p2-x))
                        (not (= k 1))
                        (not (= k -1))))))))
      (labels ((iterator (rest-precurt)
                 (if rest-precurt
                     (and (check current (car rest-precurt))
                          (iterator (cdr rest-precurt)))
                     't)))
        (iterator precurt)))))
(defun queens (board-size)
  (labels ((queen-cols (k)
             (if (= k 0)
                 (list nil)
                 (filter (lambda (positions) (safe? k positions))
                         (flatmap (lambda (rest-of-queens)
                                    (map 'list
                                         (lambda (new-row)
                                           (adjoin-position new-row k
                                                            rest-of-queens))
                                         (enumerate-interval 1 board-size)))
                                  (queen-cols (- k 1)))))))
    (queen-cols board-size)))

(defun push-dot (string)
  (format nil "~A." string))
(defun push-n-dot (n string)
  (if (= n 0)
      string
      (push-n-dot (- n 1) (push-dot string))))
(defun format-result (board-size result)
  (flet ((format-row (queen-position)
           (let ((left (- (car queen-position) 1))
                 (right (- board-size (car queen-position))))
             (let ((string (push-n-dot left "")))
               (let ((string (format nil "~AQ" string)))
                 (let ((string (push-n-dot right string)))
                   string))))))
    (labels ((iterator-cond (result rest-result)
               (if rest-result
                   (iterator-cond (cons (format-row (car rest-result)) result)
                                  (cdr rest-result))
                   result)))
      (labels ((iterator (result rest-result)
                 (if rest-result
                     (iterator (cons (iterator-cond nil (car rest-result))
                                     result)
                               (cdr rest-result))
                     result)))
        (iterator nil result)))))
