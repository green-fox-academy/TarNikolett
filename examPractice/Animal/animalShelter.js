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
    /* findNewOwner() {

    } */
    earnDonation(amount) {
        this.budget += amount;
        return ` Budget is ${this.budget} €`
    }
    toString() {
        let animalsToString = '';
        for (let i = 0; i < this.animals.length; i++) {
            animalsToString += this.animals[i]
        }
        console.log(`Budget: ${this.budget}€, There are ${this.animals.length} animal(s) and ${this.adoptersName.length} potential adopter(s).`);
        console.log(animalsToString)
    }
}