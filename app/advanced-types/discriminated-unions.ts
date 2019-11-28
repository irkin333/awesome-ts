interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }

    console.log('Animal speed is: ' + speed);
}

// moveAnimal({type: 'bird', flyingSpeed: 100});
// moveAnimal({type: 'horse', runningSpeed: 70});