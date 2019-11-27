class Department {
    /* class property definition */
    name: string;
    id: number;
    /* accessible only from inside of a class */
    //private employees: string[] = [];

    /* accessible in this class and all the classes, that extend this class */
    protected employees: string[] = [];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    /* class method definition */
    /* this method can be called only for objects of Departmet type */
    /* this method still can be called without arguments */
    getName(this: Department) {
        console.log(this.name);
    }

    addEmployee(employee: string) {
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



/*** Shorthand for class creation ***/
class Product {
    /* readonly - for properties that shouldn't change */
    constructor(private name:string, public readonly id:number) {  }
}
let product = new Product('First Test Product', 1);
console.log(product);



/*** Inheritance example ***/
class ITDepartment extends Department {
    constructor(id:number, public hasComputers: boolean) {
        /* call of Department constructor here to have correct instance */
        super('IT department', id);
        this.hasComputers = hasComputers;
    }

    addEmployee(employee: string) {
        this.employees.push('IT department employee: ' + employee);
    }
};
let itDepartment = new ITDepartment(11, true);
itDepartment.addEmployee('Max');
itDepartment.addEmployee('Anna');
console.log(itDepartment);



/*** Get/Set example ***/
class AccountingDepartment extends Department {
    constructor(id:number, private report: string) {
        /* call of Department constructor here to have correct instance */
        super('Accounting department', id);
    }

    get lastReport() {
        if(this.report) {
            return this.report;
        }
        throw new Error('No report!');
    }

    set lastReport(report: string) {
        this.report = report;
    }
};
let accountingDepartment = new AccountingDepartment(11, 'Private report text');
console.log(accountingDepartment.lastReport);
accountingDepartment.lastReport = 'Another report';
/* Compiler throw an error here */
//console.log(accountingDepartment.report);
console.log(accountingDepartment.lastReport);



/*** Static properties and methods example ***/
class Employee {
    constructor(public name: string, public id: number) {}

    static createEmployee(name: string, id: number) {
        return 'New employee: ' + name + '; ID of employee is: ' + id;
    }
}
const employee1 = Employee.createEmployee('Max', 1);
const employee2 = Employee.createEmployee('Anna', 2);
console.log(employee1, employee2);



/*** Abstract classes example ***/
abstract class AbstractProduct {
    /* readonly - for properties that shouldn't change */
    constructor(public name:string, readonly id:number) {  }

    /* enforcing all child classes to implement such method */
    abstract printName(this: AbstractProduct): void
}

class FoodProduct extends AbstractProduct {
    constructor(name:string, id: number) {
        super(name, id);
    }

    printName() {
        console.log('This is food product and name is: ' + this.name);
    }
}

const melon = new FoodProduct('Melon', 111);
melon.printName();


/*** Singletons & Private Constructors example ***/
/*** Singleton - there should be only 1 instance of a certain class ***/
class ManagementDepartment extends Department {
    private static instance: ManagementDepartment;

    private constructor(id:number) {
        /* call of Department constructor here to have correct instance */
        super('Management department', id);
    }

    static getInstance() {
        /* both accesses is possible */
        if(!ManagementDepartment.instance) {
            this.instance = new ManagementDepartment(113);
        }
        return this.instance;
    }
};

/* an error here */
//let managementDepartment = new ManagementDepartment(1);
console.log(ManagementDepartment.getInstance());
