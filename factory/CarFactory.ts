import { Tesla } from "./../cars/tesla";
import { Mercedes } from "./../cars/mercedes";
import { Fiat } from "./../cars/fiat";
import { iCar } from "./../cars/iCar";

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