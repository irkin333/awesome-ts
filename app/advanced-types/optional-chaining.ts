const fetchedData = {
    id: 1,
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
}
/* if fetched data is received from a server and we cannot
   know for sure if job prop and title prop will be there for sure
   so basically we are saying TS - check if this exists and then acces it */
// console.log(fetchedData?.job?.title);


/* You can have a situation - you want to set DEFAULT value only when 
   userInput is null or undefined, but if its 0 or empty string you want to keep value */
const userInput = '';

/* ?? is a nullish coalescing */
//const storedData = userInput ?? 'DEFAULT';