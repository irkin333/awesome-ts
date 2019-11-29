/*** argument a and argument b should always be of type object ***/
function logArgs<T extends object, U extends object>(a: T, b:U): void {
    console.log(Object.assign(a, b))
    console.log('Objects are assigned');
}
//logArgs('test', 12); //should be an error
//logArgs({id: 1}, {}); //works fine


/*** in my countAndPrint function I want to be sure I receive el with length prop */
interface hasLengh {
    length: number;
}
function countAndPrint<T extends hasLengh>(el: T): [T, string] {
    let descriptionText = 'No value';

    if(el.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if(el.length > 1) {
        descriptionText = 'Got ' + el.length + ' elements.';
    }

    return [el, descriptionText];
}
//console.log(countAndPrint('hey'));

/*** I want to be sure key exists in obj */
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
// console.log(extractAndConvert({age: 30}, 'age'));
