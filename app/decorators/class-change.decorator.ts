/* Decorator example */
function ChangeDecorator(log: string) {
    return function<T extends {new(...args: any[]): {}}>(originalConstructor: any) {  
        return class extends originalConstructor {
            constructor (..._: any[]) {
                super();
                console.log(log);
            }
        }
    }
}

@ChangeDecorator('log text')
class ClassToChange {
    // name: string;

    constructor() {
        // this.name = 'test';
    }
}

const change = new ClassToChange();
console.log(change);