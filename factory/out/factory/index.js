"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarFactory_1 = require("./CarFactory");
const carFactory = new CarFactory_1.CarFactory();
const myTesla = carFactory.createCar('Tesla');
myTesla.engineSize = 0;
myTesla.drive(); // Outputs: You are driving a Tesla
const myMercedes = carFactory.createCar('Mercedes');
myMercedes.engineSize = 8;
myMercedes.drive(); // Outputs: You are driving a Mercedes
const myFiat = carFactory.createCar('Fiat');
myFiat.engineSize = 4;
myFiat.drive(); // Outputs: You are driving a Mercedes
//# sourceMappingURL=index.js.map