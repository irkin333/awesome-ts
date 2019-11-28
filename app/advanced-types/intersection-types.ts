type Administrator = {
    name: string;
    privileges: string[];
}

type SimpleEmployee = {
    name: string;
    started: Date;
}
/*** Intersection ***/
type ElevatedEmployee = Administrator & SimpleEmployee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    started: new Date()
}