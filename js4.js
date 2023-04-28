/*План:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой :)*/

function ElectrPribor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}
//метод определяющий что прибор включен
ElectrPribor.prototype.plugIn = function() {
    console.log(`Прибор ${this.name} включен!`);
    this.isPlugged = true;
};
//метод определяющий что прибор выключен
ElectrPribor.prototype.plugOff = function() {
    console.log(`Прибор ${this.name} выключен!`);
    this.isPlugged = false;
};

//Прибор 1
function Lamp(name, power, brand, tiplamp) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.tiplamp = tiplamp;
    this.isPlugged = true;
}
//создаём новый экземпляр лампы(Lamp) объекта приборы(ElectrPribor)
Lamp.prototype = new ElectrPribor();

//Прибор 2
function Computer(name, power, functional, brand, type) {
    this.name = name;
    this.power = power;
    this.functional = functional;
    this.brand = brand;
    type.type = type;
    this.isPlugged = false;
}
//создаём новый экземпляр компьютера(Computer) объекта приборы(ElectrPribor)
Computer.prototype = new ElectrPribor();

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
