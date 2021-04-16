let routine = []

function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`)
    return `Wake ${dogName} the ${dogBreed}`
}
function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return `Leash ${dogName} the ${dogBreed}`
}
function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return `Walk to the park with ${dogName} the ${dogBreed}`
}
function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return `Throw the frisbee for ${dogName} the ${dogBreed}` 
}
function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`) 
    return `Walk home with ${dogName} the ${dogBreed}`
}
function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return `Unleash ${dogName} the ${dogBreed}`
}
routine.push(wakeDog)
routine.push(leashDog) 
routine.push(walkToPark) 
routine.push(throwFrisbee) 
routine.push(walkHome) 
routine.push(unleashDog) 

let results = []

function exerciseDog(dogName, dogBreed) {
    // results.push(routine[0](dogName, dogBreed))
    // results.push(routine[1](dogName, dogBreed))
    // results.push(routine[2](dogName, dogBreed))
    // results.push(routine[3](dogName, dogBreed))
    // results.push(routine[4](dogName, dogBreed))
    // results.push(routine[5](dogName, dogBreed))
    for(let i = 0; i < routine.length; i++) {
        results.push(routine[i](dogName, dogBreed))
    }
    return results 
}