/*** built in types that extend standard types ***/

/*** PARTIAL ***/
interface CourseGoal {
    title: string;
    description: string;
    completedOn: Date;
}

function createCourse(title: string, description: string, date: Date): CourseGoal {
    /* at this point cg object is not of type CourseGoal, it is just empty object
       but I know it will be correct type, so temporarily I use Partial type */
    let cg: Partial<CourseGoal> = {};
    cg.title = title;
    cg.description = description;
    cg.completedOn = date;
    return cg as CourseGoal;
}


/*** READONLY ***/
const namesList: Readonly<string[]> = ['Max', 'Anna'];

//namesList.push('John') //causes an error;
