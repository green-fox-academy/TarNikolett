/*
Készíts egy Sharpie osztályt
Tudnunk kell mindegyik filctoll színét color (ez legyen string típusú), szélességét width
(legyen egy lebegőpontos szám), a tinta mennyiségét inkAmount (szintén egy lebegőpontos szám)
Példányosításkor a color és a width legyenek kötelezően megadandóak
Minden példányosított filctoll inkAmount értéke legyen alapból 100
Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét
*/
class Sharpie {
    color;
    width;
    inkAmount= 100;
    constructor (color, width){
        this.color=color;
        this.width=width;
        this.inkAmount=100;
    }
use (){
    this.inkAmount--;
}
}
//const sharpie1 = new Sharpie('blue', 10);
//console.log(sharpie1);
//sharpie1.use();
//console.log(sharpie1);