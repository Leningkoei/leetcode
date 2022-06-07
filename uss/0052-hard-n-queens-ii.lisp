(define (filter predicate sequence)
  (cond ((null? sequence) (list))
        ((predicate (car sequence))
         (cons (car sequence) (filter predicate (cdr sequence))))
        (else (filter predicate (cdr sequence)))))
(define (accumulate op initial sequence)
  (if (null? sequence)
      (list)
      (op (car sequence) (accumulate op initial (cdr sequence)))))
(define (flatmap procedure sequence)
  (accumulate append (list) (map procedure sequence)))
(define (enumerate-interval low high)
  (if (> low high)
      (list)
      (cons low (enumerate-interval (+ low 1) high))))

(define (total-n-queens n)
  (define (check p1 p2)
    (let ((p1-x (car p1))
          (p1-y (cadr p1))
          (p2-x (car p2))
          (p2-y (cadr p2)))
      (let ((delta-x (- p1-x p2-x))
            (delta-y (- p1-y p2-y)))
        (let ((k (/ delta-x delta-y)))
          (and (not (= p1-x p2-x))
               (not (= k 1))
               (not (= k -1)))))))
  (define (safe? positions)
    (let ((current (car positions))
          (precurt (cdr positions)))
      (define (iterator rest-precurt)
        (if (null? rest-precurt)
            #t
            (and (check current (car rest-precurt))
                 (iterator (cdr rest-precurt)))))
      (iterator precurt)))
  (define (adjoin-position row col rest-position)
    (cons (list row col) rest-position))
  (define (queen-cols k)
    (if (= k 0)
        (list (list))
        (filter (lambda (positions) (safe? positions))
                (flatmap (lambda (rest-of-queens)
                           (map (lambda (new-row)
                                  (adjoin-position new-row
                                                   k
                                                   rest-of-queens))
                                (enumerate-interval 1 n)))
                         (queen-cols (- k 1))))))
  (queen-cols n))