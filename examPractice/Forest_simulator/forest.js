export default class Forest {
  listOfTrees = [];

  constructor(listOfTrees) {
    this.listOfTrees = listOfTrees;
  }

  rain() {
    for (let i = 0; i < this.listOfTrees.length; i++) {
      this.listOfTrees[i].irrigate();
    }
  }

  cutTrees(lumberjack) {
    this.listOfTrees = this.listOfTrees.filter(tree => !lumberjack.canCut(tree));
  }

  isEmpty() {
    if (this.listOfTrees.length == 0) {
      return true;
    }
  }

  getStatus() {
    let listOfTreesToString = [];
    for (let i = 0; i < this.listOfTrees.length; i++) {
      listOfTreesToString += `There is a ${this.listOfTrees[i].height} tall ${this.listOfTrees[i].type} in the forest!\n `
    }
    return listOfTreesToString;
  }
}