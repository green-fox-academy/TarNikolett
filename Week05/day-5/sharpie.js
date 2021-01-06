/*
Készíts egy Sharpie osztályt
Tudnunk kell mindegyik filctoll színét color (ez legyen string típusú), szélességét width
(legyen egy lebegőpontos szám), a tinta mennyiségét inkAmount (szintén egy lebegőpontos szám)
Példányosításkor a color és a width legyenek kötelezően megadandóak
Minden példányosított filctoll inkAmount értéke legyen alapból 100
Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét
*/
export class Sharpie {
    color;
    width;
    inkAmount = 2;
    constructor(color, width) {
        this.color = color;
        this.width = width;
    }
    use() {
        this.inkAmount--;
    }
}
