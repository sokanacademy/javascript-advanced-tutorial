function Person(name, age) {
  this.name = name;
  this.age = age;
  this.intro = function () {
    return this.name;
  };
}
Person.prototype.intro = () => {
  return this.name;
};
let myBrother = new Person("Mehdi", 20);
console.log(myBrother.intro());


Object.prototype
