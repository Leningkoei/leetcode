#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>

int swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
  return 0;
};

int main() {
  int a = 1;
  int b = 2;
  swap(&a, &b);
  printf("%d, %d\n", a, b);
  
  return 0;
};
