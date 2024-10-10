// import { CarFactory } from "./CarFactory"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const carFactory = new CarFactory();
// const myTesla = carFactory.createCar('Tesla');
// myTesla.engineSize = 0;
// myTesla.drive(); // Outputs: You are driving a Tesla
// const myMercedes = carFactory.createCar('Mercedes');
// myMercedes.engineSize = 8;
// myMercedes.drive(); // Outputs: You are driving a Mercedes
// const myFiat = carFactory.createCar('Fiat');
// myFiat.engineSize = 4;
// myFiat.drive(); // Outputs: You are driving a Mercedes
function printDelayed(elements) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const element of elements) {
            yield delay(400);
            console.log(element);
        }
    });
}
function delay(milliseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
        });
    });
}
console.log('ss');
printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
    console.log();
    console.log("Printed every element!");
});
//# sourceMappingURL=index.js.map