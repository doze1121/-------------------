class ElectrPribor {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
//метод определяющий что прибор включен
    plugIn() {
        console.log(`Прибор ${this.name} включен!`);
        this.isPlugged = true;
    }
//метод определяющий что прибор выключен
    plugOff() {
        console.log(`Прибор ${this.name} выключен!`);
        this.isPlugged = false;
    }
}
//Прибор 1
class Lamp extends ElectrPribor {
    constructor(name, power, brand, tiplamp){
        super(name, power);
        this.brand = brand;
        this.tiplamp = tiplamp;
        this.isPlugged = true;
    }
}
//Прибор 2
class Computer extends ElectrPribor {
    constructor(name, power, functional, brand, type){
        super(name, power);
        this.functional = functional;
        this.brand = brand;
        type.type = type;
        this.isPlugged = false;
    }
}
//создаём экземпляр лампа
const tableLamp = new Lamp('Лампа', 30, 'Xiaomi', 'LED');
//создаём экземпляр ПК
const homePC = new Computer('Домашний ПК', 120, 'стационарный', 'Intel', 'для учебы и игр');

//Покажет в консоле результат вкл или выкл
tableLamp.plugOff(); //выключили лампу
homePC.plugIn(); //включили пк

//результат приборов
console.log(tableLamp)
console.log(homePC)
