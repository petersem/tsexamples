// do an async/await to the async function
async function printDelayed(elements: string[]) {
    for (const element of elements) {
        await delay(1500);
        console.log(element);
    }
}

// do an async call to an artificial delay to simulate longer running processes
async function delay(milliseconds: number) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(resolve, milliseconds);
        //reject("No no noooo!");
    });
}

// do an asynchronous call and get results as they return. 
printDelayed(["Hello", "beautiful", "asynchronous", "world"])
  .then(() => {
    console.log("");
    console.log("Finished printing every element in array!");
  })
  .catch(error => console.log(error));