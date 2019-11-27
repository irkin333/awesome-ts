"use strict";
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
department1.getName();
department1.addEmployee('Max');
department1.addEmployee('Anna');
department1.getEmployeesInfo();
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
let product = new Product('First Test Product', 1);
console.log(product);
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
console.log(itDepartment);
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
console.log(accountingDepartment.lastReport);
accountingDepartment.lastReport = 'Another report';
console.log(accountingDepartment.lastReport);
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
console.log(employee1, employee2);
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
melon.printName();
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
console.log(ManagementDepartment.getInstance());
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
console.log(user1.printPersonInfo());
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
console.log(employee);
console.log(employee.printPersonInfo());
;
let addInstance = (n1, n2) => { return n1 + n2; };
console.log(addInstance(2, 3));
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user2 = new UserClass('David');
let user3 = new UserClass('Marie', 25);
console.log(user2.age, user3.age);
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
//# sourceMappingURL=bundle.js.map