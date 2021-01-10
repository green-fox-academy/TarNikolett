import WhitebarkPine from './WhitebarkPine.js';
import FoxtailPine from './FoxtailPine.js';
import Lumberjack from './lumberjack.js';
import Forest from './forest.js';

let newTreeOfWhitebarkPine = new WhitebarkPine (10);
let newTreeOfWhitebarkPine2 = new WhitebarkPine (2);
let newTreeOfFoxtailPine = new FoxtailPine (5);
let newTreeOfFoxtailPine2 = new FoxtailPine (8);
let newTreeOfFoxtailPine3 = new FoxtailPine (9);
let listOfTrees = [newTreeOfWhitebarkPine, newTreeOfFoxtailPine,newTreeOfFoxtailPine2,newTreeOfWhitebarkPine2,newTreeOfFoxtailPine3];
let newForest = new Forest (listOfTrees);
console.log(newForest.getStatus());


