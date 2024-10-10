import { iCar } from "./iCar";

export class Mercedes implements iCar {
    model:string = "Mercedes";
    engineSize: number;

    drive() {
      console.log(`You are driving a ${'v' + this.engineSize + ' ' + this.model}`);

    }
  }