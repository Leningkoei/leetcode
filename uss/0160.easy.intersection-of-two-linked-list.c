#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>

typedef struct ListNode {
  int val;
  struct ListNode *next;
} *ListNode;
// struct ListNode {
//   int val;
//   struct ListNode *next;
// };
// typedef struct ListNode *ListNode;
ListNode makeListNode(int val, ListNode next) {
  ListNode listNode = (ListNode)malloc(sizeof(ListNode));
  listNode->val = val;
  listNode->next = next;
  return listNode;
};

int listLength(ListNode head) {
  int iterator(ListNode restListNode, int length) {
    return restListNode?
      iterator(restListNode->next, length + 1):
      length;
  };
  return iterator(head, 0);
};

// ListNode getIntersectionNode(ListNode headA, ListNode headB) {
//   int listALength = listLength(headA);
//   int listBLength = listLength(headB);
//   int sum = listALength + listBLength;
// 
//   ListNode iterator(ListNode p1, ListNode p2, int count) {
//     if (count > sum) {
//       return NULL;
//     } else if (p1 && p2) {
//       if (p1 == p2) {
//         return p1;
//       } else {
//         return iterator(p1->next, p2->next, count + 1);
//       };
//     } else if (p1) {
//       return iterator(p1->next, headA, count + 1);
//     } else if (p2) {
//       return iterator(headB, p2->next, count + 1);
//     } else {
//       return iterator(headB, headA, count + 1);
//     };
//   };
// 
//   return iterator(headA, headB, 0);
// };
ListNode getIntersectionNode(ListNode headA, ListNode headB) {
  ListNode iterator(ListNode p1, ListNode p2) {
     return p1 == p2? p1:
       iterator(p1? p1->next: headB, p2? p2->next: headA);
  };
  return iterator(headA, headB);
};
int testGetIntersectionNode() {
  ListNode c3 = makeListNode(8, NULL);
  ListNode c2 = makeListNode(7, c3);
  ListNode c1 = makeListNode(6, c2);
  ListNode a2 = makeListNode(2, c1);
  ListNode a1 = makeListNode(1, a2);
  ListNode b3 = makeListNode(5, c3);
  ListNode b2 = makeListNode(4, b3);
  ListNode b1 = makeListNode(3, b2);

  int result = c3 == getIntersectionNode(a1, b1);
  printf("%d\n", result);

  free(c3);
  free(c2);
  free(c1);
  free(a2);
  free(a1);
  free(b3);
  free(b2);
  free(b1);

  return result;
};

int main() {
  if (testGetIntersectionNode()) {
    printf("Done\n");
    return 0;
  } else {
    printf("Error\n");
    return 1;
  };
};
