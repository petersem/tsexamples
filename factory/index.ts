// import { CarFactory } from "./CarFactory"

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


async function printDelayed(elements: string[]) {
    for (const element of elements) {
        await delay(400);
        console.log(element);
    }
}

async function delay(milliseconds: number) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(resolve, milliseconds);
        //reject("No no noooo!");
    });
}

console.log('ss');
printDelayed(["Hello", "beautiful", "asynchronous", "world"])
  .then(() => {
    console.log();
    console.log("Printed eve-ry element!");
  })
  .catch(error => console.log(error));