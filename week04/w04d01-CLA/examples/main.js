class Vehicle {
  fuel = 100;
  material = "steel";
  drive() {
    this.fuel--;
    return "Vroom!";
  }
  refuel() {
    this.fuel = 100;
  }
}

class Car extends Vehicle {
  constructor(model, color) {
    super();
    this.model = model;
    this.color = color;
  }
}

const myCar = new Car("Honda", "white");

console.log(myCar.drive());
