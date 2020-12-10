class Garden {
    plants = [];

    addPlant(plant){
        this.plants.push(plant);
    }

    watering(quantity) {

        let needsWater = this.getPlantsToWater();

        let waterAmountPerPlant = quantity / needsWater.length;

        needsWater.forEach(plant => plant.waterConsumption(waterAmountPerPlant));
        return `Öntözés ${quantity}-vel`;
    }

    getPlantsToWater() {
        return this.plants.filter((plant) => plant.isNeedWater());
    }

    getGardenStatus() {

    }
}

export default Garden;