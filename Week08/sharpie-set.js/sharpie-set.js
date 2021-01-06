import { Sharpie } from '../../Week05/day-5/sharpie.js';

let sharpie1 = new Sharpie('red', 10);
let sharpie2 = new Sharpie('blue', 20);
let sharpie3 = new Sharpie('yellow', 8);
let sharpie4 = new Sharpie('purple', 2);


class SharpieSet {
    listOfSharpie = [sharpie1, sharpie2, sharpie3, sharpie4];

    countUsable() {
        for (let i = 0; i < this.listOfSharpie.length; i++) {
            let colorOfSharpie = this.listOfSharpie[i].color;
            if (this.listOfSharpie[i].inkAmount === 0) {
                throw new Error(`Can't use ${colorOfSharpie} sharpie : it has 0 inkAmount`)
            }
        }
    }

    removeTrash() {
        for (let i = 0; i < this.listOfSharpie.length; i++) {
            if (this.listOfSharpie[i].inkAmount == 0) {
                this.listOfSharpie.splice(i, 1);
            }
        }
    }
}

let test = new SharpieSet();
/* console.log(test.listOfSharpie);
console.log(test.countUsable());
sharpie4.use();
sharpie4.use();
console.log(sharpie4);
test.countUsable();
test.removeTrash();
console.log(test.listOfSharpie); */

