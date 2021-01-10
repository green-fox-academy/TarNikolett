export default class Tree {
  height;
  type;
  constructor(height = 0) {
    this.height = height;
  }

  irrigate() {
    if (this.type == 'FoxtailPine') {
      this.height++
    }
    else {
      this.height += 2
    }
  }

  getHeight() {
    return (` Height of the tree is ${this.height} meter(s)! `);
  }
}

