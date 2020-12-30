/* 
Készíts egy Farm osztályt
ez tartalmazza az állatok listáját
legyen egy helyek értéke, amely meghatározza az állatok számára elérhető szabad helyeket
breed() -> Készítsen egy új állatot a farm állatai közé, ha van neki hely. Ha nincs, írja ki a konzolra, hogy "A farm megtelt".
slaughter() -> Törölje a legkevésbé éhes állatot a farm állatai közül. */

import { Animal } from './animal.js'

let animals = [];
animals.push(new Animal(15, 10));
animals.push(new Animal(10, 20));
animals.push(new Animal(5, 30));
animals.push(new Animal(25, 40));

class Farm {
   constructor(place) {
        this.place = place;
    } 
    breed(hunger, thirst) {
        if (this.place === 0) {
            console.log('A farm megtelt!')
        }
        else {
            animals.push(new Animal(hunger, thirst));
        }
    }
    /* slaughter() {
        for (let i = 0; i< animals.length; i++){
            for (let j =0; i < animals.length; j++){
                
            }
        }
    } */
}
new Farm(0).breed(20, 50);
console.log(animals);
