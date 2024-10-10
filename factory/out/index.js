"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarFactory_1 = require("./CarFactory");
var carFactory = new CarFactory_1.CarFactory();
var myTesla = carFactory.createCar('Tesla');
myTesla.engineSize = 0;
myTesla.drive(); // Outputs: You are driving a Tesla
var myMercedes = carFactory.createCar('Mercedes');
myMercedes.engineSize = 8;
myMercedes.drive(); // Outputs: You are driving a Mercedes
//# sourceMappingURL=index.js.map