"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fiat = void 0;
var Fiat = /** @class */ (function () {
    function Fiat() {
        this.model = "Fiat";
    }
    Fiat.prototype.drive = function () {
        console.log("You are driving a ".concat('v' + this.engineSize + ' ' + this.model));
    };
    return Fiat;
}());
exports.Fiat = Fiat;
//# sourceMappingURL=fiat.js.map