type CombinableType = string | number;
type NumericType = number | boolean;

type UniversalType = CombinableType & NumericType;

function addCombinable(a: CombinableType, b: CombinableType) {
    /* ensure code runs correctly */
    if(typeof a === 'string' || typeof b === 'string') {
        return (+a) + (+b);
    }
    return a + b;
}

/* Employees from intersections */
type UnknownEmployee = SimpleEmployee | Administrator;

function printEmployeeInfo(e: UnknownEmployee) {
    console.log(e.name);

    if('privileges' in e) {
        console.log(e.privileges);
    }

    if('started' in e) {
        console.log(e.started);
    }
}


/* Classes type guards */
class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loaded: ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    /* guard */
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}

// useVehicle(v1);
// useVehicle(v2);