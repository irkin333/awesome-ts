function Log(target: any, propertyName: string) {
    // console.log('Property decorator...')
    // console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    // console.log('Accessor decorator...')
    // console.log(target);
    // console.log(name);
    // console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    // console.log('Method decorator...')
    // console.log(target);
    // console.log(name);
    // console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    // console.log('Parameter decorator...')
    // console.log(target);
    // console.log(name);
    // console.log(position);
}

class UserAClass {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if(val > 0) {
            this._price = val;
        }
    }

    constructor(t: string, p:number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax:number) {
        return this._price * (1 + tax);
    }
}

const userA = new UserAClass('title', 45);
// console.log(userA);