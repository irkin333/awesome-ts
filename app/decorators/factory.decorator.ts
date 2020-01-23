/* Decorator Factory example */
function LoggerFactory(logText: string) {
    return function(constructor: Function) {
        // console.log(logText);
        // console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@LoggerFactory('LOGGING - PERSON')
@WithTemplate('<h1>My person</h1>', 'app')
class PersonClass {
    name = 'Irina';

    constructor() {
        //console.log('Creating a person...');
    }
}

const person2 = new PersonClass();
//console.log(person2);