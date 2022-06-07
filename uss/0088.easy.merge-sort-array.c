#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>

typedef void *any;
typedef int *Array;

typedef struct Cons {
  any current;
  struct Cons *rest;
} *Cons;
Cons cons(any current, Cons rest) {
  Cons this = (Cons)malloc(sizeof(struct Cons));
  this->current = current;
  this->rest = rest;
};
any car(Cons this) {
  return this->current;
};
Cons cdr(Cons this) {
  return this->rest;
};
Cons SETCAR(Cons this, any current) {
  this->current = current;
  return this;
};
Cons SETCDR(Cons this, any rest) {
  this->rest = rest;
  return this;
};
int listLength(Cons this) {
  return this?
    1+ listLength(cdr(this)):
    0;
};

int main() {
  Cons nil = NULL;
  int x = 1;
  Cons a = cons(&x, nil);
  int y = 2;
  Cons b = cons(&y, a);
  int z = 3;
  Cons c = cons(&z, b);

  return 0;
};
