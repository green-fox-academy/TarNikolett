import Plant from './plant.js';
import Tree from './tree.js';
import Flower from './flower.js';
import Garden from './garden.js';

let garden = new Garden ();
const yellow = new Flower('yellow');
const blue = new Flower('blue');

garden.addPlant(yellow);
garden.addPlant(blue);
garden.addPlant(new Tree('purple'));
garden.addPlant(new Tree('orange'));

console.log(garden);