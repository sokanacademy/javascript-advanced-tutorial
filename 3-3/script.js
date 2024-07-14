class Cat {
  constructor(name, color = "black") {
    this.name = name;
    this.color = color;
  }
  intro() {
    return `cat's name is ${this.name}`;
  }
}

class Lion extends Cat {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  action() {
    return this.intro() + ` and he is ${this.age} years old.`;
  }
}

let lion = new Lion("simba", 5);
console.log(lion.color);

class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]
