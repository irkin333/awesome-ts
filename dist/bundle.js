"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Animal speed is: ' + speed);
}
function combineItems(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const validationError = {
    email: 'Email has an incorrect value',
    userNamr: 'Use only characters for user name'
};
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    started: new Date()
};
const fetchedData = {
    id: 1,
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
const userInput = '';
const userInputElement = document.getElementById('user-name');
userInputElement.value = 'Max';
function addCombinable(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return (+a) + (+b);
    }
    return a + b;
}
function printEmployeeInfo(e) {
    console.log(e.name);
    if ('privileges' in e) {
        console.log(e.privileges);
    }
    if ('started' in e) {
        console.log(e.started);
    }
}
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loaded: ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
class Department {
    constructor(name, id) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    getName() {
        console.log(this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getEmployeesInfo() {
        console.log(this.employees);
    }
}
let department1 = new Department('Test department 1', 1);
department1.addEmployee('Max');
department1.addEmployee('Anna');
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
let product = new Product('First Test Product', 1);
class ITDepartment extends Department {
    constructor(id, hasComputers) {
        super('IT department', id);
        this.hasComputers = hasComputers;
        this.hasComputers = hasComputers;
    }
    addEmployee(employee) {
        this.employees.push('IT department employee: ' + employee);
    }
}
;
let itDepartment = new ITDepartment(11, true);
itDepartment.addEmployee('Max');
itDepartment.addEmployee('Anna');
class AccountingDepartment extends Department {
    constructor(id, report) {
        super('Accounting department', id);
        this.report = report;
    }
    get lastReport() {
        if (this.report) {
            return this.report;
        }
        throw new Error('No report!');
    }
    set lastReport(report) {
        this.report = report;
    }
}
;
let accountingDepartment = new AccountingDepartment(11, 'Private report text');
accountingDepartment.lastReport = 'Another report';
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static createEmployee(name, id) {
        return 'New employee: ' + name + '; ID of employee is: ' + id;
    }
}
const employee1 = Employee.createEmployee('Max', 1);
const employee2 = Employee.createEmployee('Anna', 2);
class AbstractProduct {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class FoodProduct extends AbstractProduct {
    constructor(name, id) {
        super(name, id);
    }
    printName() {
        console.log('This is food product and name is: ' + this.name);
    }
}
const melon = new FoodProduct('Melon', 111);
class ManagementDepartment extends Department {
    constructor(id) {
        super('Management department', id);
    }
    static getInstance() {
        if (!ManagementDepartment.instance) {
            this.instance = new ManagementDepartment(113);
        }
        return this.instance;
    }
}
;
let user1 = {
    name: 'John Doe',
    age: 25,
    job: {
        position: 'doctor',
        experience: 2
    },
    printPersonInfo() {
        return 'Hi, my name is: ' + this.name;
    }
};
class EmployeePerson {
    constructor(name, age, position, experience) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.experience = experience;
        this.job = {
            position,
            experience
        };
        this.id = Math.round(Math.random() * 10);
    }
    printPersonInfo() {
        return `Hi, I am an employee, my name is ${this.name}. My position is ${this.job.position}`;
    }
}
let employee = new EmployeePerson('Max', 25, 'engineer', 2);
;
let addInstance = (n1, n2) => { return n1 + n2; };
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user2 = new UserClass('David');
let user3 = new UserClass('Marie', 25);
let numberType;
let stringType;
let booleanType;
let anyType;
let objType;
let typedSpecificObj = {
    numberProp: 1,
    stringProp: 'string',
    booleanProp: true
};
let arrayType = ['Element 1', 'Element 2'];
let tupleType = [1, 'string value'];
let tupleType2 = [0, 'string value', true];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
;
let enumType = Role.USER;
let unionType;
unionType = 1;
unionType = true;
let anotherUnionType;
let literalType;
let unknownType;
unknownType = 5;
unknownType = 'test';
function add(n1, n2) { return n1 + n2; }
function add1(n1, n2) { return 'Result will be: ' + (n1 + n2); }
function add2(n1, n2) { console.log(n1 + n2); }
let addFuntionType;
addFuntionType = add;
let add1FuntionType;
add1FuntionType = add1;
function throwError(message) {
    throw { message };
}
function ChangeDecorator(log) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log(log);
            }
        };
    };
}
let ClassToChange = class ClassToChange {
    constructor() {
    }
};
ClassToChange = __decorate([
    ChangeDecorator('log text')
], ClassToChange);
const change = new ClassToChange();
console.log(change);
function LoggerFactory(logText) {
    return function (constructor) {
        console.log(logText);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let PersonClass = class PersonClass {
    constructor() {
        this.name = 'Irina';
    }
};
PersonClass = __decorate([
    LoggerFactory('LOGGING - PERSON'),
    WithTemplate('<h1>My person</h1>', 'app')
], PersonClass);
const person2 = new PersonClass();
function Logger(target) {
}
let Person = class Person {
    constructor() {
        this.name = "Irina";
    }
};
Person = __decorate([
    Logger
], Person);
const person1 = new Person();
function Log(target, propertyName) {
}
function Log2(target, name, descriptor) {
}
function Log3(target, name, descriptor) {
}
function Log4(target, name, position) {
}
class UserAClass {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], UserAClass.prototype, "title", void 0);
__decorate([
    Log2
], UserAClass.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], UserAClass.prototype, "getPriceWithTax", null);
const userA = new UserAClass('title', 45);
class StorageClass {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const storageInstance = new StorageClass();
storageInstance.addItem('Anna');
storageInstance.addItem({ name: 'Max' });
const stringsStorageInstance = new StorageClass();
stringsStorageInstance.addItem('Anna');
function createCourse(title, description, date) {
    let cg = {};
    cg.title = title;
    cg.description = description;
    cg.completedOn = date;
    return cg;
}
const namesList = ['Max', 'Anna'];
const genericArray = [];
const genericPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 2000);
});
function merge(a, b) {
    return Object.assign(a, b);
}
const mergedObject = merge({ name: 'Max' }, { age: 25 });
const mergedObject2 = merge({ id: 0 }, { title: 'test' });
function logArgs(a, b) {
    console.log(Object.assign(a, b));
    console.log('Objects are assigned');
}
function countAndPrint(el) {
    let descriptionText = 'No value';
    if (el.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (el.length > 1) {
        descriptionText = 'Got ' + el.length + ' elements.';
    }
    return [el, descriptionText];
}
function extractAndConvert(obj, key) {
    return obj[key];
}
//# sourceMappingURL=bundle.js.map