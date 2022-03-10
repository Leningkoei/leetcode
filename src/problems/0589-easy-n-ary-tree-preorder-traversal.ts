/// Given the `root` of an n-ary tree, return the preorder traversal of its
/// node's values.

import Node from "../lib/N-Tree-Node.js";

export default function preorder(root: Node | null): number[] {
  const result = [];
  const preorder = (root: Node | null) => root?
    (result.push(root.val),
     root.children.forEach((child: Node | null) => preorder(child))):
    undefined;

  preorder(root);

  return result;
};

