import Plant from './plant.js';

 class Flower  extends Plant  {
   /*  constructor (color , waterLvl){
        super(color, waterLvl);
    } */

    isNeedWater(){
        return this.waterLvl < 5 ;
     }
 
     waterConsumption (waterAmount){
         this.waterLvl += waterAmount * 0.75;
     }
} 
export default Flower;