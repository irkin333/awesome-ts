/*** An interfaces forces us to implement properties and methods for our classes ***/

/*** An interface example. It can be used as a specific type ***/
type Job = {readonly position: string, experience: number};

interface Person {
    name: string;
    age: number;
    job: Job;
    printPersonInfo():string;
}

let user1: Person = {
    name: 'John Doe',
    age: 25,
    job: {
        position: 'doctor',
        experience: 2
    },
    printPersonInfo() {
        return 'Hi, my name is: ' + this.name
    }
}
// console.log(user1.printPersonInfo());



/*** Interfaces usage with classes ***/
class EmployeePerson implements Person {
    job: Job;
    id: number;

    constructor(public name:string,
                public age:number,
                protected position: string,
                protected experience: number) {

            this.job = {
                position,
                experience
            }

            this.id = Math.round(Math.random()*10);
        }

    printPersonInfo() {
        return `Hi, I am an employee, my name is ${this.name}. My position is ${this.job.position}`
    }
}

let employee = new EmployeePerson('Max', 25, 'engineer', 2);
// console.log(employee);
// console.log(employee.printPersonInfo());



/*** Interfaces readonly methods ***/
interface Product {
    /* all the Product child classes will have read only prop id;
        it will be impossible to change is for any classes instances, 
        which implementing Product interface
     */
    readonly id: number;
    title: string;
}



/*** Extending Interfaces example ***/
interface ProductOutput {
    printInfo():string;
};
interface MeasuredProduct extends Product, ProductOutput {
    measurement: string
}



/*** Interfaces as function types ***/
interface AddFn {
    (a: number, b: number): number;
}

let addInstance = (n1: number, n2: number) => { return n1 + n2; };
// console.log(addInstance(2, 3));



/*** Interfaces: optional propeties and params ***/
interface UserInterface {
    name: string;
    age?: number; //optional prop
}

class UserClass implements UserInterface {
    constructor(public name: string, public age?: number) {}
}

let user2 = new UserClass('David');
let user3 = new UserClass('Marie', 25);
// console.log(user2.age, user3.age);
