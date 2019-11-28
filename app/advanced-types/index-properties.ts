/** need to be flexible **/
interface ErrorContainer {
   [prop: string]: string;
}

const validationError: ErrorContainer = {
    email: 'Email has an incorrect value',
    userNamr: 'Use only characters for user name'
}