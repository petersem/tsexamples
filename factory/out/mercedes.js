"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mercedes = void 0;
var Mercedes = /** @class */ (function () {
    function Mercedes() {
        this.model = "Mercedes";
    }
    Mercedes.prototype.drive = function () {
        console.log("You are driving a ".concat('v' + this.engineSize + ' ' + this.model));
    };
    return Mercedes;
}());
exports.Mercedes = Mercedes;
//# sourceMappingURL=mercedes.js.map