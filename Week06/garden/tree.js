import Plant from './plant.js';

class Tree extends Plant {
  /*   constructor(color , waterLvl){
        super(color , waterLvl);
    } */

    isNeedWater(){
        return this.waterLvl < 10 ;
     }
 
     waterConsumption (waterAmount){
         this.waterLvl += waterAmount *0.4;
     }
}
export default Tree;