import { iCar } from "./iCar";

export class Tesla implements iCar {
    model:string = "Tesla";
    engineSize: number;

    drive() {
      console.log(`You are driving a ${'v' + this.engineSize + ' ' + this.model}`);
    }
  }
  
