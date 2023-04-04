// script.js
// Part: 1
// 'Vehicle' object
class Vehicle {
  constructor( make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // returns the string "Beep"
  honk() {
    return 'Beep.';
  }

  // returns a string with the 'make', 'model', and 'year' of a vehicle
  toString() {
    return `
        The vehicle is a ${this.year}, ${this.make} ${this.model}.
        `;
  }
}

let FirstCar = new Vehicle( 'Nissan', 'Z', 1984 );
FirstCar.honk();
FirstCar.toString();

//Part: 2
// 'Car' object that inherits from the 'Vehicle' class
class Car extends Vehicle {
  constructor( make, model, year ) {
    super( make, model, year );
    this.numWheels = 4;
  }
}

let SecondCar = new Car( 'Nissan', 'GTR', 2022 );
SecondCar.toString();
SecondCar.honk();
SecondCar.numWheels;

// Part: 3
// 'Motorcycle' object that inherits from the 'Vehicle' class
class Motorcycle extends Vehicle {
  constructor( make, model, year ) {
    super( make, model, year );
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}
let FirstCycle = new Motorcycle( 'Kawasaki', 'Ninja 400', 2008 );
FirstCycle.toString();
FirstCycle.honk(); 
FirstCycle.revEngine();
FirstCycle.numWheels; 

// Part: 4
// 'Garage' object
class Garage {
  constructor( capacity ) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add( vehicle ) {
    if ( !( vehicle instanceof Vehicle )) {
      return "Only vehicles are allowed in here!";
    }
    if ( this.vehicles.length >= this.capacity ) {
      return "Sorry, we're full.";
    }
    this.vehicles.push( vehicle );
    return "Vehicle added!";
  }
}

let garage = new Garage(2);

garage.vehicles; 
garage.add( new Car( 'Hyundai', 'Elantra', 2015 ));

garage.vehicles;
garage.add( 'Taco' );

garage.add( new Motorcycle( 'Honda', 'Nighthawk', 2000 ));

garage.vehicles;

garage.add(new Motorcycle( 'Honda', 'Nighthawk', 2001 ));