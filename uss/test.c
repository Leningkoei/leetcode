#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>

int main() {
  int a = 1;
  int *b = &a;
  int c = ++*b++*++*b++;
  // int c = ++*b++*++*b++*++*b++;
  // int d = ++c*++*b++*c++*++*b++*c++;

  printf("%d\n", c);
  // printf("%d\n", d);

  return 0;
};
