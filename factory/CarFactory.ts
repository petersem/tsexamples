import { Tesla } from "./tesla";
import { Mercedes } from "./mercedes";
import { Fiat } from "./fiat";
import { iCar } from "./iCar";

export class CarFactory {
    createCar(type: string): iCar {
      if (type === 'Tesla') {
        return new Tesla();
      } else if (type === 'Mercedes') {
        return new Mercedes();
      } else if (type === 'Fiat') {
        return new Fiat();
      } else {
        throw new Error("Car type not supported");
      }
    }
  }