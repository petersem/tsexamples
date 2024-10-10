"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fiat = void 0;
class Fiat {
    constructor() {
        this.model = "Fiat";
    }
    drive() {
        console.log(`You are driving a ${'v' + this.engineSize + ' ' + this.model}`);
        var fiatClock = setTimeout(() => {
            console.log('hey spaggo!!!!');
        }, 5000);
        //clearInterval(fiatClock);
    }
}
exports.Fiat = Fiat;
//# sourceMappingURL=fiat.js.map