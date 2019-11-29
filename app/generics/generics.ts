/*** an array of strings ***/
const genericArray: Array<string> = [];
/*** promise, that returns string as a result and now on result we can call string methods ***/
const genericPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!')
    }, 2000);
});

/*** own generic types ***/
function merge<T, U>(a: T, b:U): T & U {
    return Object.assign(a, b);
}
const mergedObject = merge({name: 'Max'}, {age: 25});

/*** set types for specific function call ***/
const mergedObject2 = merge<{id: number}, {title: string}>({id: 0}, {title: 'test'});
//console.log(mergedObject.name);
