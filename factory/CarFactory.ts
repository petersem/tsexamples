import { Tesla } from "./tesla";
import { Mercedes } from "./mercedes";
import { iCar } from "./iCar";

export class CarFactory {
    createCar(type: string): iCar {
      if (type === 'Tesla') {
        return new Tesla();
      } else if (type === 'Mercedes') {
        return new Mercedes();
      } else {
        throw new Error("Car type not supported");
      }
    }
  }