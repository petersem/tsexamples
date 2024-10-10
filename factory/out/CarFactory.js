"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFactory = void 0;
var tesla_1 = require("./tesla");
var mercedes_1 = require("./mercedes");
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createCar = function (type) {
        if (type === 'Tesla') {
            return new tesla_1.Tesla();
        }
        else if (type === 'Mercedes') {
            return new mercedes_1.Mercedes();
        }
        else {
            throw new Error("Car type not supported");
        }
    };
    return CarFactory;
}());
exports.CarFactory = CarFactory;
//# sourceMappingURL=CarFactory.js.map