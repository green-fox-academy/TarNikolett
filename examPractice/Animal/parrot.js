import Animal from './animal.js';

export default class Parrot extends Animal {
    name = 'Parrot';
    constructor(name) {
        super('Niki', 'false', (Math.floor(Math.random() * (10 - 4 + 1)) + 4), name);
    }
}
