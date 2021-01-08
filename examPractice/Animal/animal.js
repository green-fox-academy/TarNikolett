export default class Animal {
    ownerName;
    isHealthy;
    healCost;
    constructor(ownerName, isHealthy, healCost) {
        this.ownerName = ownerName;
        this.isHealthy = isHealthy;
        this.healCost = healCost;
    }
    heal() {
        this.isHealthy = 'true';
    }
    isAdoptable() {
        if (this.isHealthy == 'true') {
            return true
        }
        else {
            throw new Error(`Animal can't be adopted!`)
        }
    }
    toString() {
        if (this.isHealthy == 'true') {
            return (`${this.constructor.name} is healthy, and adoptable! `)
        }
        else if (this.isHealthy == 'false') {
            return (`${this.constructor.name} is not healthy, ${this.healCost} €, and not adoptable! `)
        }
    }
}