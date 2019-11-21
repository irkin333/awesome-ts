/* PRIMITIVE TYPES */
let numberType: number;
let stringType: string;
let booleanType: boolean;

/* COMPLEX TYPES */
let anyType: any;
let objType: object;

let typedSpecificObj: {
    numberProp: number;
    stringProp: string;
    booleanProp: boolean;
} = {
    numberProp: 1,
    stringProp: 'string',
    booleanProp: true
};

// console.log(typedSpecificObj);

/* an array consistent only from strings */
let arrayType: string[] = ['Element 1', 'Element 2'];

/* NEW(ABSENT IN VANILLA JS) TYPES */
/* an array with fixed length and specific elements types */
let tupleType: [number, string] = [1, 'string value'];
let tupleType2: [number, string, boolean] = [0, 'string value', true];

enum Role { ADMIN, USER, READ_ONLY_USER };
//default => enum Role { ADMIN(0), USER(1), READ_ONLY_USER(2) };
//can be => enum Role { ADMIN = 5, USER = 8, READ_ONLY_USER = 12 };

let enumType = Role.USER;
// console.log('Role test gives us an ID of role: ' + enumType);

let unionType: number | boolean;
unionType = 1;
unionType = true;

type Combinable = number | string;
let anotherUnionType: Combinable;

/* variable should have either 'admin' value or 'user' */
let literalType: 'admin' | 'user';

let unknownType: unknown;
unknownType = 5;
unknownType = 'test';
//unknownType = numberType; //should be an error here, as we know numberType type

/* TYPES RETURNED BY FUNCTIONS */
function add(n1: number, n2: number):number { return n1 + n2;}
function add1(n1: number, n2: number):string { return 'Result will be: ' + (n1 + n2);}
function add2(n1: number, n2: number):void { console.log(n1 + n2);} //doesn't return anything

/* FUNCTIONS AS TYPES */
let addFuntionType: Function; //any function will be ok
addFuntionType = add;
// console.log(addFuntionType(1, 2));

let add1FuntionType: (a:number, b:number) => string;
add1FuntionType = add1;
// console.log(add1FuntionType(1, 2));

/* NEVER TYPE */
/* could be useful for errors throwing */
function throwError(message:string):never { //cannot ever return anything.
    throw { message }
}
// throwError('This is an error!');
