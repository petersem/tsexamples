import { iCar } from "./iCar";

export class Fiat implements iCar {
    model: string = "Fiat";
    engineSize: number;

    drive(){
        console.log(`You are driving a ${'v' + this.engineSize + ' ' + this.model}`);
    }
}