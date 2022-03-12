/// Given the `root` of an n-ary tree, return the postorder traversal of its
/// node's values.
///
/// Nary-Tree input serialization is represented in their level order traversal.
/// Each group of children is separated by the null value (See examples).

import Node from "../lib/N-Tree-Node.js";

export default function postorder(root: Node | null): number[] {
  const result: number[] = [];

  function postorder(root: Node | null): void {
    if (root) {
      root.children.forEach((child: Node): void => postorder(child));

      result.push(root.val);
    };
  };

  postorder(root);

  return result;
};

