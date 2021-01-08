import Animal from './animal.js';

export default class Dog extends Animal {
    name = 'Dog';
    constructor(name) {
        super('Niki', 'true', Math.floor(Math.random() * (8 - 1 + 1)) + 1, name);
    }
}