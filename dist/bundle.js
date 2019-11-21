"use strict";
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