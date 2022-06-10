(defun accumulate (initial rest procedure)
  (if rest
      (funcall procedure (car rest)
               (accumulate initial (cdr rest) procedure))
      initial))
(defun in-set? (target set &key test)
  (let ((procedure
          (lambda (current rest)
            (or (funcall test current target) rest))))
    (accumulate '() set procedure)))

(defun length-of-longest-substring (s)
  (labels ((iterator (longest-length current-length current-string rest-string)
             (if rest-string
                 (let ((in-set? (in-set? (car rest-string)
                                         current-string
                                         :test 'equal)))
                   (iterator (max longest-length current-length)
                             (if in-set?
                                 (- current-length 1)
                                 (+ current-length 1))
                             (if in-set?
                                 (cdr current-string)
                                 (append current-string `(,(car rest-string))))
                             (if in-set?
                                 rest-string
                                 (cdr rest-string))))
                 (max longest-length current-length))))
    (iterator 0 0 '() s)))
