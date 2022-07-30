// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

const foodList = [
    {
        name: 'mashedPotatoes',
        steps: 5,
    },
    {
        name: 'steak',
        steps: 8,
    },
    {
        name: 'brusselsSprouts',
        steps: 8,
    },
    {
        name: 'broccoli',
        steps: 7,
    },
]

const printError = (err) => console.error(err);


// Iteration 1 - using callbacks
// for (let food of foodList) {
//     const printItem = (instruction) => {
//         document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
//     }
//     const printLastItem = (instruction) => {
//         document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
//         document.querySelector(`#${food.name}Img`).removeAttribute("hidden");
//     }
//
//     for (let step = 0; step < food.steps; step++) {
//         if (step === food.steps - 1) {
//             getInstruction(food.name, step, printLastItem, printError);
//         } else {
//             getInstruction(food.name, step, printItem, printError);
//         }
//     }
//
// }


// Iteration 2 - using promises
// foodList.forEach(async (food) => {
//     const printItem = (instruction) => {
//         document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
//     }
//     const printLastItem = (instruction) => {
//         document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
//         document.querySelector(`#${food.name}Img`).removeAttribute("hidden");
//     }
//
//     for (let step = 0; step < food.steps; step++) {
//         if (step === food.steps - 1) {
//             await obtainInstruction(food.name, step).then(printLastItem).catch(printError);
//         } else {
//             await obtainInstruction(food.name, step).then(printItem).catch(printError);
//         }
//     }
// })

// Iteration 3 using async/await
// const processFood = async function(food) {
//     const printItem = (instruction) => {
//         document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
//     }
//     const printLastItem = (instruction) => {
//         document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
//         document.querySelector(`#${food.name}Img`).removeAttribute("hidden");
//     }
//
//     for (let step = 0; step < food.steps; step++) {
//         if (step === food.steps - 1) {
//             await obtainInstruction(food.name, step).then(printLastItem).catch(printError);
//         } else {
//             await obtainInstruction(food.name, step).then(printItem).catch(printError);
//         }
//     }
// }
// foodList.forEach(async (food) => {
//     await processFood(food)
// })

// Bonus 2 - Promise all
foodList.forEach(async (food) => {
    const printItem = (instruction) => {
        console.log(food)
        document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
    }
    const printLastItem = (instruction) => {
        console.log(food)
        document.querySelector(`#${food.name}`).innerHTML += `<li>${instruction}</li>`;
        document.querySelector(`#${food.name}Img`).removeAttribute("hidden");
    }

    promises = []
    for (let step = 0; step < food.steps; step++) {
        if (step === food.steps - 1) {
            promises.push(obtainInstruction(food.name, step).then(printLastItem).catch(printError));
        } else {
            promises.push(obtainInstruction(food.name, step).then(printItem).catch(printError));
        }
    }

    await Promise.all(promises).catch((err) => console.log("catch()", err));
})
