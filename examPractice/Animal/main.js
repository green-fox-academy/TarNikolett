import Cat from './cat.js';
import Dog from './dog.js';
import Parrot from './parrot.js';
import AnimalShelter from './animalShelter.js';

let newAnimalShelter = new AnimalShelter();
newAnimalShelter.rescue(new Cat());
newAnimalShelter.rescue(new Dog());
newAnimalShelter.rescue(new Parrot());
console.log(newAnimalShelter.heal());

console.log(newAnimalShelter);
newAnimalShelter.addAdopter('Viki');
newAnimalShelter.addAdopter('Miki');
console.log(newAnimalShelter);
console.log(newAnimalShelter.earnDonation(500));
newAnimalShelter.toString();