class Car {
  constructor(name) {
    this.name = name;
  }

  static cname = "pride";
  static intro() {
    return ` my car is pride`;
  }
}

let myCar = new Car("Pride");
// console.log(myCar.name);

console.log(Car.cname);
// console.log(Car.intro());
