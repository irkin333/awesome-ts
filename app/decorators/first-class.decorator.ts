/* Decorator example */
function Logger(target: Function) {
    // console.log('Logging...');
    // console.log(target);
}

@Logger
class Person {
    name = "Irina";

    constructor() {
        //console.log('Creating a person...');
    }
}

const person1 = new Person();
//console.log(person1);