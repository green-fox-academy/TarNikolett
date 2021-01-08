import Animal from './animal.js';

export default class Cat extends Animal {
    name = 'Cat';
    constructor(name) {
        super('Niki', 'false', Math.floor(Math.random() * 7), name)
    }
}