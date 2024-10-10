"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFactory = void 0;
const tesla_1 = require("./../cars/tesla");
const mercedes_1 = require("./../cars/mercedes");
const fiat_1 = require("./../cars/fiat");
class CarFactory {
    createCar(type) {
        if (type === 'Tesla') {
            return new tesla_1.Tesla();
        }
        else if (type === 'Mercedes') {
            return new mercedes_1.Mercedes();
        }
        else if (type === 'Fiat') {
            return new fiat_1.Fiat();
        }
        else {
            throw new Error("Car type not supported");
        }
    }
}
exports.CarFactory = CarFactory;
//# sourceMappingURL=CarFactory.js.map