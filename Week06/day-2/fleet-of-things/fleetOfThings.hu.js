import { Thing } from './thing.hu.js';
import { Fleet } from './fleet.hu.js';

// -  Van egy `Thing` osztályod
// -  Van egy `Fleet` osztályod
// - Ezen osztályokat használva érd el az alábbi kimenetet:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let fleet = new Fleet();

let thing1 = new Thing ('Get milk');
let thing2 = new Thing ('Remove the obstacles');
let thing3 = new Thing ('Stand up');
let thing4 = new Thing ('Eat lunch');

thing3.complete();
thing4.complete();

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

console.log(fleet.toString());