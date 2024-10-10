"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tesla = void 0;
var Tesla = /** @class */ (function () {
    function Tesla() {
        this.model = "Tesla";
    }
    Tesla.prototype.drive = function () {
        console.log("You are driving a ".concat('v' + this.engineSize + ' ' + this.model));
    };
    return Tesla;
}());
exports.Tesla = Tesla;
//# sourceMappingURL=tesla.js.map