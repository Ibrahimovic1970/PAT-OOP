// nomor 1 (satu)
function robot(brand,Mikrokontroler ) {
    this.brand
    this.Mikrokontroler 
}

// nomor 2 (dua)
class Humanoid extends robot {
    constructor(brand,Mikrokontroler ) {
        super(brand,Mikrokontroler ,true);
    }
    Move() {
        return `${this.brand} Bergerak melayani!`;
    }
}

// nomor 3 (tiga)
class Otonom extends robot {
    constructor(brand,Mikrokontroler ) {
        super(brand,Mikrokontroler , false);
    }
    turn() {
        return `${this.brand} berbelok ke kiri!`;
    }
}

// nomor 4 (empat)
const MyHumanoid = new Humanoid ('Humanoid', "PIC");

// nomror 5 (lima)
const MyOtonom = new Otonom ('Otonom', "Arduino")

// contoh penggunaan
console.log(MyHumanoid.Move()); //melaju dengan cepat
console.log(MyOtonom.turn());  //ber belok ke kiri
console.log(MyHumanoid);  //robot {brand: 'Humanoid', mikrokontroler: PIC}
console.log(MyOtonom);  //robot {brand: 'Otonom', mikrokontroler: Arduino}
