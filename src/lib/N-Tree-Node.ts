export default class NTreeNode {
  constructor(val?: number) {
    this.val = val === undefined? 0: val;
    this.children = [];
  };

  public val: number = undefined;
  public children: NTreeNode[] = undefined;
};

