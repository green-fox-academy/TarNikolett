export default class AnimalShelter {
    budget = 50;
    animals = [];
    adoptersName = [];
    rescue(animal) {
        this.animals.push(animal)
        return this.animals.length;
    }
    heal() {
        let healedAnimalsNumber = 0;
        let firstNotHealedAnimal = this.animals.find(animal => animal.isHealthy == 'false');
        if (firstNotHealedAnimal !== undefined && firstNotHealedAnimal.healCost <= this.budget) {
            firstNotHealedAnimal.heal();
            healedAnimalsNumber++
        }
        return `${healedAnimalsNumber} animals healed.`
    }
    addAdopter(name) {
        this.adoptersName.push(name);
    }

    findNewOwner() {
        console.log(this.animals.length, this.adoptersName.length);
        if (this.animals.length == 0 || this.adoptersName.length == 0) {
            throw new Error('There are no mor animal or adopters!')
        }
        let adoptersName = '';
        let adoptableAnimal = '';
        adoptersName = this.adoptersName.splice((Math.floor(Math.random() * this.adoptersName.length)), 1);
        adoptableAnimal = this.animals.splice((Math.floor(Math.random() * this.animals.length)), 1);
        console.log(`${adoptersName} adopt ${adoptableAnimal[0].name} ! `);
    }

    earnDonation(amount) {
        this.budget += amount;
        return ` Budget is ${this.budget} €`
    }

    toString() {
        let animalsToString = '';
        for (let i = 0; i < this.animals.length; i++) {
            animalsToString += this.animals[i]
        }
        console.log(`Budget: ${this.budget} €, There are ${this.animals.length} animal(s) and ${this.adoptersName.length} potential adopter(s).`);
        console.log(animalsToString)
    }
}