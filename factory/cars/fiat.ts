import { iCar } from "./iCar";

export class Fiat implements iCar {
    model: string = "Fiat";
    engineSize: number;

    drive(){
        console.log(`You are driving a ${'v' + this.engineSize + ' ' + this.model}`);
        // var fiatClock = setTimeout(() => {
        //     console.log('hey spaggo!!!!');
        // },5000);
        //clearInterval(fiatClock);
    }
}