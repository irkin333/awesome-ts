//option 1
//const userInputElement = <HTMLInputElement>document.getElementById('user-name');

//option 2
const userInputElement = document.getElementById('user-name') as HTMLInputElement;

userInputElement.value = 'Max';