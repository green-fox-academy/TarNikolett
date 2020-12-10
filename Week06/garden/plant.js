class Plant{
    
    constructor (color , waterLvl = 10){
        this.color = color;
        this.waterLvl = waterLvl;
    }

    isNeedWater(){
       return this.waterLvl < 5 ;
    }

    waterConsumption (waterAmount){
        this.waterLvl += waterAmount;
    }
}

export default Plant; 